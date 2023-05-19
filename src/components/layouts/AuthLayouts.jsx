import { useState } from "react"
import { Link } from "react-router-dom"

function AuthLayouts(props){
    const {children , title,type} = props
    return (
    <div className="w-full max-w-xs ">
      <h1 className='text-3xl text-blue-500 font-bold mb-2 '>{title}</h1>
      <p className='font-medium text-slate-500 mb-8'>Welcome ,Please enter your details</p>
      {children}     
      <p>
        {type == "register" ? "have an account? " : "dont have an account? " } 
        {type == "register" && <Link to="/login" className="text-blue-600"> login</Link> }
        {type == "login" && <Link to="/register" className="text-blue-600"> Register</Link> }
 
        </p>
      {/* <Navigate type = {type}/> */}
     </div>
    )
}

// const Navigate = (props) => {
//   const {type } = props
//   if(type == "login"){
//     return (
//       <p> dont have an account? 
//         <Link to="/register"> Register</Link>
//       </p>
//     )
//   } else {
//     return (
//       <p> have an account? 
//         <Link to="/login"> login</Link>
//       </p>
//     )
//   }
// }

export default AuthLayouts