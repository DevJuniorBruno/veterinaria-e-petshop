import './header.css'
import React, {useState} from 'react';
import {Link} from "react-router-dom"
import logo from '../../img/logo.png'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="navbar">
            <span><Link to="/" ><img className='nav_logo' to='/' src={ logo } alt="logo-restaurante" /></Link> </span>
            <div className={`nav_links ${isOpen && "open"}`}>
                <Link to='/'>Home</Link>
                <Link to='clinica'>Clínica</Link>
                <Link to='servicos'>Farmácia e Pet Shop</Link>
                <Link to="banhoetosa">Banho e Tosa</Link>
                <Link to="localizacao">Localização</Link> 
                <Link to="contato">Contato</Link>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} 
            onClick={()=>setIsOpen(!isOpen)} 
            >
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Header;