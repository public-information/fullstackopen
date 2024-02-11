import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const existingPersonCount = (nawName) => {
        return persons.filter(
            person => person.name.toLowerCase() === newName.toLowerCase()
        ).length
    }

    const handleAddPerson = (event) => {
        event.preventDefault()
        if (!existingPersonCount(newName)) {
            setPersons(persons.concat({
                name: newName,
                number: newNumber
            }))
        } else {
            alert(`${newName.toLowerCase()} is already added to phonebook`)
        }
        setNewName('')
        setNewNumber('')
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input onChange={e => setNewName(e.target.value)} value={newName} />
                </div>
                <div>
                    number: <input onChange={e => setNewNumber(e.target.value)} value={newNumber} />
                </div>
                <div>
                    <button onClick={handleAddPerson} type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
            </ul>
        </div>
    )
}

export default App