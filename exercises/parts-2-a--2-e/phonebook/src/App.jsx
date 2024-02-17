import { useState, useEffect } from 'react'

import AddPerson from './components/AddPerson.jsx'
import Search from './components/Search.jsx'
import TelephoneDirectory from './components/TelephoneDirectory.jsx'

import personsService from './services/personsService.js'

const App = () => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [persons, setPersons] = useState([])
    const [searchString, setSearchString] = useState('')

    useEffect(() => {
        personsService
            .get()
            .then(personsData => {
                setPersons(personsData)
            })
            .catch((error) => {
                console.log('promise rejected', error)
            })
    }, [])

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

    const handleDeletePerson = (person) => () => {
        if ( confirm(`delete ${person.name} ?`) ) {
            personsService
                .remove(person.id)
                .then(removedData => {
                    setPersons(persons.filter(
                        person => person.id !== removedData.id
                    ))
                })
                .catch((error) => {
                    console.log('promise rejected', error)
                })
        }
    }

    const handleAddPerson = (event) => {
        event.preventDefault()
        if (!matchingPersonsCount(newName)) {
            personsService
                .add({
                    name: newName,
                    number: newNumber,
                })
                .then(newPersonData => {
                    setPersons(persons.concat(newPersonData))
                })
                .catch((error) => {
                    console.log('promise rejected', error)
                })
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
            <TelephoneDirectory persons={searchResults(searchString)} handleDeleteButton={handleDeletePerson}/>
        </div>
    )
}

export default App