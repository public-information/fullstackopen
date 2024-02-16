const Input = ({label, handler, value}) => {
    return (
        <div>
            <span>{label}: </span>
            <input onChange={e => handler(e.target.value)} value={value} />
        </div>
    )
}

export default Input