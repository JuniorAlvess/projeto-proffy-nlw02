import React, { InputHTMLAttributes } from 'react';

import './styles.css'
//InputHTMLAttributes serve para que o input possa receber os atributos que um input tradicional do html receberia por padrão
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} {...rest}/>
    </div>
    );
}

export default Input;