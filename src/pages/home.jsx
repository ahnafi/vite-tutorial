import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Homepage (){
    const [login,setLogin] = useState(false)
    useEffect(()=>{ 
        if(!login){
            window.location.replace("/login")
        }
    },[login])
    return (
        <div className="w-full justify-center items-center h-screen flex gap-3 text-xl">
        <h1>hello </h1>
        <Link to="/login" className="text-blue-500"> login</Link>
        </div>
    )
}
export default Homepage