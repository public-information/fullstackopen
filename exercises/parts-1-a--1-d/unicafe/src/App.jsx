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

const App = () => {

    const goodLabel = 'good'
    const neutralLabel = 'neutral'
    const badLabel = 'bad'

    const [feedback, setFeedback] = useState({
        [`${goodLabel}`]: 0,
        [`${neutralLabel}`]: 0,
        [`${badLabel}`]: 0,
    })

    const totalFeedback = () => {
        return feedback[goodLabel] + feedback[neutralLabel] + feedback[badLabel]
    }

    const averageFeedbackScore = () => {
        let score = feedback[goodLabel] + (feedback[badLabel] * -1)
        let total = totalFeedback()
        return total ? (score / total) : total
    }

    const positiveFeedbackPercentage = () => {
        let positive = (feedback[goodLabel] / totalFeedback()) * 100
        return totalFeedback() ? positive : totalFeedback()
    }

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
                <Heading heading={"statistics"} />
                <Counter label={goodLabel} count={feedback[goodLabel]}/>
                <Counter label={neutralLabel} count={feedback[neutralLabel]}/>
                <Counter label={badLabel} count={feedback[badLabel]}/>
                <Counter label={'all'} count={totalFeedback()}/>
                <Counter label={'average'} count={averageFeedbackScore()}/>
                <Percentage label={'positive'} percentage={positiveFeedbackPercentage()}/>
            </div>
        </div>
    )
}

export default App