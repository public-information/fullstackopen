import { useState, useEffect } from 'react'

import AddPerson from './components/AddPerson.jsx'
import Search from './components/Search.jsx'
import TelephoneDirectory from './components/TelephoneDirectory.jsx'
import Notification from './components/Notification.jsx'

import personsService from './services/personsService.js'

const App = () => {

    const notificationTimeout = 5000

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [notification, setNotification] = useState({})
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

    const matchingPersons = () => {
        return persons.filter(
            person => person.name.toLowerCase() === newName.toLowerCase()
        )
    }

    const handleClearNotification = (ms) => {
        new Promise(resolve => setTimeout(resolve, ms))
            .then(result => {
                setNotification({})
            })
            .catch((error) => {
                console.log('promise rejected', error)
            })
    }

    const handleDeletePerson = (person) => () => {
        if ( confirm(`delete ${person.name} ?`) ) {
            personsService
                .remove(person.id)
                .then(removedData => {
                    setPersons(persons.filter(
                        person => person.id !== removedData.id
                    ))
                    setNotification({
                        message: `${removedData.name} was removed successfully`,
                        type: 'success'
                    })
                    handleClearNotification(notificationTimeout)
                })
                .catch((error) => {
                    console.log('promise rejected', error)
                    const message = error.response.status === 404 ?
                        `${person.name} has already been removed from server` :
                        `An error occurred while trying to remove ${person.name}`
                    setNotification({
                        message: message,
                        type: 'error'
                    })
                    handleClearNotification(notificationTimeout)
                })
        }
    }

    const handleAddPerson = (event) => {
        event.preventDefault()
        const matches = matchingPersons(newName)
        if (!matches.length) {
            personsService
                .add({
                    name: newName,
                    number: newNumber,
                })
                .then(newPersonData => {
                    setPersons(persons.concat(newPersonData))
                    setNotification({
                        message: `${newName} was added successfully`,
                        type: 'success'
                    })
                    handleClearNotification(notificationTimeout)
                })
                .catch((error) => {
                    console.log('promise rejected', error)
                })
        } else {
            if (confirm(`${newName} is already added to phonebook, replace old number with new one ?`)) {
                personsService
                    .put({
                        ...matches[0],
                        number: newNumber,
                    })
                    .then(newPersonData => {
                        setPersons(persons.map(
                            person => person.id !== newPersonData.id ? person : newPersonData
                        ))
                        setNotification({
                            message: `${matches[0].name} was updated successfully`,
                            type: 'success'
                        })
                        handleClearNotification(notificationTimeout)
                    })
                    .catch((error) => {
                        console.log('promise rejected', error)
                        const message = error.response.status === 404 ?
                            `${newName} has already been removed from server` :
                            `An error occurred while trying to remove ${newName}`
                        setNotification({
                            message: message,
                            type: 'error'
                        })
                        handleClearNotification(notificationTimeout)
                    })
            }
        }
        setNewName('')
        setNewNumber('')
    }
    return (
        <div>
            <Notification notification={notification}/>
            <Search searchString={searchString} handleSearch={setSearchString}/>
            <AddPerson newName={newName} newNumber={newNumber} handleNameInput={setNewName} handleNumberInput={setNewNumber} handleAddPerson={handleAddPerson} />
            <TelephoneDirectory persons={searchResults(searchString)} handleDeleteButton={handleDeletePerson}/>
        </div>
    )
}

export default App