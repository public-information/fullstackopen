import { useState } from 'react'

import AddPerson from '../AddPerson'
import Search from '../Search'
import TelephoneDirectory from '../TelephoneDirectory'

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '020-987654', id: 2 },
        { name: 'Annie Easley', number: '401-223-1234', id: 3 },
        { name: 'Dorothy Vaughan', number: '774-123-0987', id: 4 },
        { name: 'Grace Hopper', number: '508-332-2233', id: 5 }
    ])

    const [searchString, setSearchString] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const searchResults = (searchString) => {
        return persons.filter(
            person => person.name.toLowerCase().includes(searchString.toLowerCase())
        )
    }

    const matchingPersonsCount = () => {
        return persons.filter(
            person => person.name.toLowerCase() === newName.toLowerCase()
        ).length
    }

    const handleAddPerson = (event) => {
        event.preventDefault()
        if (!matchingPersonsCount(newName)) {
            setPersons(persons.concat({
                name: newName,
                number: newNumber,
                id: persons.length + 1
            }))
        } else {
            alert(`${newName.toLowerCase()} is already added to phonebook`)
        }
        setNewName('')
        setNewNumber('')
    }
    return (
        <div>
            <Search searchString={searchString} handleSearch={setSearchString}/>
            <AddPerson newName={newName} newNumber={newNumber} handleNameInput={setNewName} handleNumberInput={setNewNumber} handleAddPerson={handleAddPerson} />
            <TelephoneDirectory persons={searchResults(searchString)}/>
        </div>
    )
}

export default App