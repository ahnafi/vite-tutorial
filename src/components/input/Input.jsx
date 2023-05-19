const Input=(props)=>{
    const { type ,placeholder ,name }= props
    return (
        <input type={type} name={name} id={name} autoComplete="off" className='text-sm border px-2 rounded w-full py-2 text-slate-700 placeholder:opacity-50 placeholder:mx-2' placeholder={placeholder} />
    )
}
export default Input 