const Button = ({label, type, onClickHandler}) => {
    return (
        <>
            <button onClick={onClickHandler} type={type}>{label}</button>
        </>
    )
}

export default Button