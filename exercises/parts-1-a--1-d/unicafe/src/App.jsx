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

const StatisticLine = ({label, count}) => {
    return (
        <>
            <p><Label label={label} />: {count}</p>
        </>
    )
}

const StatisticLinePercentage = ({label, percentage}) => {
    return (
        <>
            <p><Label label={label} />: {percentage} %</p>
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
            <div>
                <Heading heading={statisticsHeading} />
                <p>no feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <Heading heading={statisticsHeading} />
            <StatisticLine label={goodLabel} count={good}/>
            <StatisticLine label={neutralLabel} count={neutral}/>
            <StatisticLine label={badLabel} count={bad}/>
            <StatisticLine label={'all'} count={totalFeedback()}/>
            <StatisticLine label={'average'} count={averageFeedbackScore()}/>
            <StatisticLinePercentage label={'positive'} percentage={positiveFeedbackPercentage()}/>
        </div>
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