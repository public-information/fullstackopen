import { useState } from 'react'

const Heading = ({heading}) => {
    return (
        <>
            <h2>{heading}</h2>
        </>
    )
}

const Label = ({label}) => {
    return (
        <>
            <span>{label}</span>
        </>
    )
}

const Button = ({handleClick, label}) => {
    return (
        <>
            <button onClick={handleClick}>{label}</button>
        </>
    )
}

const StatisticRow = ({label, count}) => {
    return (
        <>
            <tr>
                <td><Label label={label} /></td>
                <td>{count}</td>
            </tr>
        </>
    )
}

const StatisticRowPercentage = ({label, percentage}) => {
    return (
        <>
            <tr>
                <td><Label label={label} /></td>
                <td>{percentage} %</td>
            </tr>
        </>
    )
}

const Statistics = ({feedback}) => {

    const statisticsHeading = "statistics"
    const [goodLabel, neutralLabel, badLabel] = Object.getOwnPropertyNames(feedback)
    const {good, neutral, bad} = feedback

    const totalFeedback = () => {
        return good + neutral + bad
    }

    const averageFeedbackScore = () => {
        const total = totalFeedback()
        const score = good + (-bad)
        return total ? (score / total) : total
    }

    const positiveFeedbackPercentage = () => {
        const total = totalFeedback()
        const positive = (good / total) * 100
        return total ? positive : total
    }

    if (!totalFeedback()){
        return (
            <>
                <Heading heading={statisticsHeading} />
                <p>no feedback given</p>
            </>
        )
    }
    return (
        <>
            <Heading heading={statisticsHeading} />
            <table>
                <tbody>
                    <StatisticRow label={goodLabel} count={good}/>
                    <StatisticRow label={neutralLabel} count={neutral}/>
                    <StatisticRow label={badLabel} count={bad}/>
                    <StatisticRow label={'all'} count={totalFeedback()}/>
                    <StatisticRow label={'average'} count={averageFeedbackScore().toFixed(1)}/>
                    <StatisticRowPercentage
                        label={'positive'} percentage={positiveFeedbackPercentage().toFixed(1)}/>
                </tbody>
            </table>
        </>
    )
}

const App = () => {

    const goodLabel = 'good'
    const neutralLabel = 'neutral'
    const badLabel = 'bad'

    const [feedback, setFeedback] = useState({
        [`${goodLabel}`]: 0,
        [`${neutralLabel}`]: 0,
        [`${badLabel}`]: 0,
    })

    const handleFeedback = (category) => () => {
            setFeedback({
                ...feedback,
                [`${category}`]: feedback[category] + 1,
            })
    }

    return (
        <div>
            <div>
                <Heading heading={"give feedback"} />
                <Button handleClick={handleFeedback(goodLabel)} label={goodLabel} />
                <Button handleClick={handleFeedback(neutralLabel)} label={neutralLabel} />
                <Button handleClick={handleFeedback(badLabel)} label={badLabel} />
            </div>
            <div>
                <Statistics feedback={feedback} />
            </div>
        </div>
    )
}

export default App