import { forwardRef } from 'react'
import Input from './Input'
import Label from './Label'

const InputForm = forwardRef((props,ref)=>{
    const {type ,placeholder ,name , label } = props
    return (
        <div className='mb-6'>
            <Label name={name} label={label}  ></Label>
            <Input name={name} ref={ref} type={type} placeholder={placeholder} />
        </div>
    )
})
export default InputForm