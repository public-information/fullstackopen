import Input from './Input.jsx'
import Button from './Button.jsx'

const AddPerson = ({newName, newNumber, handleNameInput, handleNumberInput, handleAddPerson}) => {
    return (
        <div>
            <h2>Add New Person</h2>
            <form>
                <Input label={'name'} handler={handleNameInput} value={newName} />
                <Input label={'number'} handler={handleNumberInput} value={newNumber} />
                <Button onClickHandler={handleAddPerson} type={'submit'} label={'add'}/>
            </form>
        </div>
    )
}

export default AddPerson