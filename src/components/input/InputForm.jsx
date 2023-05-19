import Input from './Input'
import Label from './Label'

function InputForm(props){
    const {type ,placeholder ,name , label} = props
    return (
        <div className='mb-6'>
            <Label name={name} label={label}  ></Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </div>
    )
}
export default InputForm