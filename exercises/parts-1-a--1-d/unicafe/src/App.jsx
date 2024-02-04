import { useState } from 'react'

const Heading = (props) => {
    return (
        <>
            <h2>{props.heading}</h2>
        </>
    )
}

const Label = (props) => {
    return (
        <>
            <span>{props.label}</span>
        </>
    )
}

const Counter = (props) => {
    return (
        <>
            <p><Label label={props.category} />: {props.count}</p>
        </>
    )
}
const Button = (props) => {
    return (
        <>
            <button onClick={props.handleClick}>{props.category}</button>
        </>
    )
}
const App = () => {

    const goodLabel = 'good'
    const neutralLabel = 'neutral'
    const badLabel = 'bad'

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <div>
                <Heading heading={"give feedback"} />
                <Button handleClick={() => setGood(good + 1)} category={goodLabel} />
                <Button handleClick={() => setNeutral(neutral + 1)} category={neutralLabel} />
                <Button handleClick={() => setBad(bad + 1)} category={badLabel} />
            </div>
            <div>
                <Heading heading={"statistics"} />
                <Counter category={goodLabel} count={good}/>
                <Counter category={neutralLabel} count={neutral}/>
                <Counter category={badLabel} count={bad}/>
            </div>
        </div>
    )
}

export default App