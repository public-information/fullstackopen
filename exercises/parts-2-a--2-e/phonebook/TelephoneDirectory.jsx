const PersonListing = ({name, number}) => {
    return (
        <li>{name} {number}</li>
    )
}

const TelephoneDirectory = ({persons}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => <PersonListing key={person.id} name={person.name} number={person.number} />)}
            </ul>
        </div>
    )
}

export default TelephoneDirectory