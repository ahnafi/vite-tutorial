// import { Link } from "react-router-dom"
import FormLogin from "../components/fragments/FormLogin"
import AuthLayouts from "../components/layouts/AuthLayouts"

function LoginPage(){
    return (
        <div className='flex justify-center h-screen items-center'>

        <AuthLayouts title="login!" type="login">
            <FormLogin /> 
        </AuthLayouts>
        </div>
    )
}
export default LoginPage