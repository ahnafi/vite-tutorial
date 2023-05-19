function Button(props){
    const {  children = "button" , variant="bg-black" } = props
    return (
      <button onClick={props.onClick} className={`h-10 px-6 font-semibold rounded-md ${variant} text-white hover:opacity-80 hover:text-black shadow-md  `} type="submit">
      {children}
      </button>
    )
  }
export default Button