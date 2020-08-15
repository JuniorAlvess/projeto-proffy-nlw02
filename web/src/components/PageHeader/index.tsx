import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';
// interface - serve para definir o formato da tipagens de um objeto
interface PageHeaderProps {
    title: string;
    // o '?' significa que a description é opcional.
    description?: string;
}

// FC - FunctionComponent "Componente escrito em forma de função"
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {  props.description && <p>{ props.description }</p>}

            {/* {props.children} - qual conteudo foi passado dentro do componente */}
            {props.children}


            </div>
        </header>
    );
}

export default PageHeader;

