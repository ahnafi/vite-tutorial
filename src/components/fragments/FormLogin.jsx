import Button from "../button/Button"
import InputForm from "../input/InputForm"
function FormLogin(){
  function submithandler(event){
    event.preventDefault()
    localStorage.setItem('email',event.target.email.value)
    localStorage.setItem('password',event.target.password.value)
    const acc = localStorage.getItem('email')
    const pas = localStorage.getItem('password')
    if(acc == "aa@a" && pas == "123"){
      window.location.replace ("/products")
    }else{
      alert("email or password does't match ,try agains")
    }
    // window.location.href = "/products"
  }
    return(
        <form action="" onSubmit={(e)=>submithandler(e)}>
        <InputForm label="Email" type="email" name='email' placeholder="example@email.com" />
        <InputForm label="Password" type="password" name='password' placeholder="***" />
        <Button variant="bg-blue-600" type="submit">Login</Button>
      </form>
    )
}
export default FormLogin