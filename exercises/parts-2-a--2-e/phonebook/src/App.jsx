import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const checkForExistingPerson = (nawName) => {
        return persons.filter(
            person => person.name.toLowerCase() === newName.toLowerCase()
        ).length
    }

    const addName = (event) => {
        event.preventDefault()
        if (!checkForExistingPerson(newName)) {
            setPersons(persons.concat({
                name: newName
            }))
        } else {
            alert(`${newName.toLowerCase()} is already added to phonebook`)
        }
        setNewName("")
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input onChange={e => setNewName(e.target.value)} value={newName} />
                </div>
                <div>
                    <button onClick={addName} type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => <li key={person.name}>{person.name}</li>)}
            </ul>
        </div>
    )
}

export default App