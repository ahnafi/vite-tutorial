const Label = (props)=>{
    const {name, label } = props
    return (
        <label htmlFor={name} className='block text-slate-700 text-sm font-bold mb-2'>{label}</label>
    )
}
export default Label