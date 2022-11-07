import './header.css'
import {Link} from "react-router-dom"
import logo from '../../img/logo.png'

function Header() {
    return(
        <header>
            <Link to="/" ><img className='logo' to='/' src={ logo } alt="logo-restaurante" /></Link> 
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='clinica'>Clínica</Link>
                <Link to='servocos'>Serviços</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/localizacao">Localização</Link> 
                <Link to="/contato">Contato</Link>
            </div>
        </header>
    )
}

export default Header;