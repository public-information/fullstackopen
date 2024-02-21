const Input = ({label, handleOnChange, value}) => {
    return (
        <>
            <span>{label}</span>
            <input onChange={e => handleOnChange(e.target.value)} value={value} />
        </>
    )
}

export default Input