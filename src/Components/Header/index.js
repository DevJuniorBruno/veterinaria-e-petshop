import './header.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../img/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinksRef = useRef(null);
  const location = useLocation()

  useEffect(() => {
    // Função que será chamada quando o usuário clicar fora do componente
    const handleClickOutside = (event) => {
      if (navLinksRef.current && !navLinksRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Adiciona o event listener para detectar os cliques fora do componente
    document.addEventListener('mousedown', handleClickOutside);

    // Remove o event listener ao desmontar o componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="navbar">
      <span>
        <Link to="/">
          <img className="nav_logo" src={logo} alt="logo-restaurante" />
        </Link>
      </span>
      <div className={`nav_links ${isOpen && 'open'}`} ref={navLinksRef}>
        <Link to="/">Home</Link>
        <Link to="clinica">Clínica</Link>
        <Link to="servicos">Farmácia e Pet Shop</Link>
        <Link to="banhoetosa">Banho e Tosa</Link>
        <Link to="localizacao">Localização</Link>
        <Link to="contato">Contato</Link>
      </div>
      <div
        className={`nav_toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Header;
