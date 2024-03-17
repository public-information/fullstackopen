import Input from './Input.jsx'

const Search = ({searchString, handleSearch}) => {
    return (
        <div>
            <h2>Phonebook</h2>
            <Input label={'filter'} handler={handleSearch} value={searchString} />
        </div>
    )
}

export default Search