import Button from './Button.jsx'

const PersonListing = ({person, handleDeletePerson}) => {
    return (
        <li>
            {person.name} {person.number}
            <Button type={'button'} label={'delete'} onClickHandler={handleDeletePerson(person)} />
        </li>
    )
}

const TelephoneDirectory = ({persons, handleDeleteButton}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {
                    persons.map(person =>
                        <PersonListing key={person.id} person={person} handleDeletePerson={handleDeleteButton} />
                    )
                }
            </ul>
        </div>
    )
}

export default TelephoneDirectory