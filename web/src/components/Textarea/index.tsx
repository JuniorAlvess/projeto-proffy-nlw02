import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'
//TextareaHTMLAttributes serve para que o Textarea possa receber os atributos que um Textarea tradicional do html receberia por padrão
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...rest}/>
    </div>
    );
}

export default Textarea;