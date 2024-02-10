import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName
        }
        setPersons(persons.concat(nameObject))
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