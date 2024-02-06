import { useState } from 'react'

const Button = ({handleClick, label}) => {
    return (
        <>
            <button onClick={handleClick}>{label}</button>
        </>
    )
}

const Anecdote = ({text, votes}) => {
    return (
        <>
            <p>{text}</p>
            <p>has {votes} votes</p>
        </>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const randomArrayIndex = (arrayLength) => {
        return Math.floor(Math.random() * (arrayLength))
    }
    const [randomlySelected, setRandomlySelected] = useState(randomArrayIndex(anecdotes.length))
    const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

    const handleAnecdoteSelection = (anecdotesLength) => () => {
        setRandomlySelected(randomArrayIndex(anecdotesLength))
    }

    const handleVoteSelection = (selectedIndex) => () => {
        const newVote = [
            ...vote.slice(0, selectedIndex),
            (vote[selectedIndex] + 1),
            ...vote.slice(selectedIndex + 1, vote.length)
        ]
        setVote(newVote)
    }

    return (
        <div>
            <Anecdote text={anecdotes[randomlySelected]} votes={vote[randomlySelected]} />
            <Button handleClick={handleVoteSelection(randomlySelected)} label={'vote'} />
            <Button handleClick={handleAnecdoteSelection(anecdotes.length)} label={'next anecdote'} />
        </div>
    )
}

export default App
