import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '../shared/Button';
import './Header.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <img 
              src="/Imagens/logo-urbancar.png" 
              alt="UrbanCar" 
              className="header__logo-image"
            />
            <h1 className="header__logo-text">UrbanCar</h1>
          </div>

          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <button 
                  className="header__nav-link"
                  onClick={() => scrollToSection('inicio')}
                >
                  Início
                </button>
              </li>
              <li className="header__nav-item">
                <button 
                  className="header__nav-link"
                  onClick={() => scrollToSection('sobre')}
                >
                  Sobre
                </button>
              </li>
              <li className="header__nav-item">
                <button 
                  className="header__nav-link"
                  onClick={() => scrollToSection('passageiros')}
                >
                  Passageiros
                </button>
              </li>
              <li className="header__nav-item">
                <button 
                  className="header__nav-link"
                  onClick={() => scrollToSection('motoristas')}
                >
                  Motoristas
                </button>
              </li>
              <li className="header__nav-item">
                <button 
                  className="header__nav-link"
                  onClick={() => scrollToSection('como-funciona')}
                >
                  Como Funciona
                </button>
              </li>
              <li className="header__nav-item">
                <button 
                  className="header__nav-link"
                  onClick={() => scrollToSection('contato')}
                >
                  Contato
                </button>
              </li>
            </ul>

            <div className="header__cta">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToSection('passageiros')}
              >
                Sou Passageiro
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => scrollToSection('motoristas')}
              >
                Sou Motorista
              </Button>
            </div>
          </nav>

          <button 
            className="header__menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};