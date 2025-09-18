function Input({ className, type, placeholder, onChange, value }) {
    return (
        <input className={className ? className : "input"} type={type} placeholder={placeholder} onChange={onChange} value={value} />
    )
}

export default Input;