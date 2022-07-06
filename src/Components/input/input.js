import React from "react";
import { useController } from 'react-hook-form';
import './input.css'

const Input = ({control,name,type,placeholder}) => {
    const {filed} = useController({
        name,
        control
    })

    return (
        <div>
            <input className="inp" {...filed} type={type} placeholder={placeholder} required={true}/>
        </div>
    )
}
export default Input;