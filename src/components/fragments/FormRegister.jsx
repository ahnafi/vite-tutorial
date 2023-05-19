import { Link } from "react-router-dom"
import Button from "../button/Button"
import InputForm from "../input/InputForm"
function FormRegister(){
  function submithandler(event){
    event.preventDefault()
  }
    return(
        <form action="" onSubmit={(e)=>submithandler(e)} >
        <InputForm label="Full Name" type="text" name='name' placeholder="example" />
        <InputForm label="Email" type="email" name='email' placeholder="example@email.com" />
        <InputForm label="Password" type="password" name='password' placeholder="***" />
        <InputForm label="confirm Password" type="password" name='confirmpassword' placeholder="***" />
        <Button variant="bg-blue-600" type="submit">Register</Button>
        
      </form>
    )
}
export default FormRegister