import Input from './Input'

const AddPerson = ({newName, newNumber, handleNameInput, handleNumberInput, handleAddPerson}) => {
    return (
        <div>
            <h2>Add New Person</h2>
            <form>
                <Input label={'name'} handler={handleNameInput} value={newName} />
                <Input label={'number'} handler={handleNumberInput} value={newNumber} />
                <div>
                    <button onClick={handleAddPerson} type='submit'>add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPerson