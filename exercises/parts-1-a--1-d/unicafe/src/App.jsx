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

const Counter = ({label, count}) => {
    return (
        <>
            <p><Label label={label} />: {count}</p>
        </>
    )
}

const Percentage = ({label, percentage}) => {
    return (
        <>
            <p><Label label={label} />: {percentage} %</p>
        </>
    )
}

const Statistics = ({feedback}) => {

    const [goodLabel, neutralLabel, badLabel] = Object.getOwnPropertyNames(feedback)
    const {good, neutral, bad} = feedback

    const totalFeedback = () => {
        return good + neutral + bad
    }

    const averageFeedbackScore = () => {
        let score = good + (-bad)
        let total = totalFeedback()
        return total ? (score / total) : total
    }

    const positiveFeedbackPercentage = () => {
        let positive = (good / totalFeedback()) * 100
        return totalFeedback() ? positive : totalFeedback()
    }

    return (
        <div>
            <Heading heading={"statistics"} />
            <Counter label={goodLabel} count={good}/>
            <Counter label={neutralLabel} count={neutral}/>
            <Counter label={badLabel} count={bad}/>
            <Counter label={'all'} count={totalFeedback()}/>
            <Counter label={'average'} count={averageFeedbackScore()}/>
            <Percentage label={'positive'} percentage={positiveFeedbackPercentage()}/>
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