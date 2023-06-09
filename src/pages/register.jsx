import FormRegister from "../components/fragments/FormRegister"
import AuthLayouts from "../components/layouts/AuthLayouts"

function RegisterPage(){
    return (
        <div className='flex justify-center h-screen items-center'>

        <AuthLayouts title="Register" type="register">
            <FormRegister /> 
        </AuthLayouts>
        </div>
    )
}
export default RegisterPage