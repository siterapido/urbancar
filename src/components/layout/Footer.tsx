import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section footer__section--brand">
            <div className="footer__logo">
              <img 
                src="/Imagens/logo-urbancar.png" 
                alt="UrbanCar" 
                className="footer__logo-image"
              />
              <h3 className="footer__logo-text">UrbanCar</h3>
            </div>
            <p className="footer__description">
              Mobilidade rápida, justa e próxima de você. 
              Conectando histórias em João Pessoa e Porto Velho desde 2019.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a 
                href="https://www.instagram.com/urbancarmobilidade/" 
                className="footer__social-link" 
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Links Rápidos</h4>
            <ul className="footer__links">
              <li>
                <button 
                  className="footer__link"
                  onClick={() => scrollToSection('inicio')}
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  className="footer__link"
                  onClick={() => scrollToSection('sobre')}
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  className="footer__link"
                  onClick={() => scrollToSection('como-funciona')}
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button 
                  className="footer__link"
                  onClick={() => scrollToSection('blog')}
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Serviços</h4>
            <ul className="footer__links">
              <li>
                <button 
                  className="footer__link"
                  onClick={() => scrollToSection('passageiros')}
                >
                  Para Passageiros
                </button>
              </li>
              <li>
                <button 
                  className="footer__link"
                  onClick={() => scrollToSection('motoristas')}
                >
                  Para Motoristas
                </button>
              </li>
              <li>
                <a href="#" className="footer__link">Entregas</a>
              </li>
              <li>
                <a href="#" className="footer__link">Parcerias</a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Contato</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <FiMapPin />
                <span>João Pessoa - PB<br />Porto Velho - RO</span>
              </div>
              <div className="footer__contact-item">
                <FiPhone />
                <span>+55 69 9337-1212</span>
              </div>
              <div className="footer__contact-item">
                <FiMail />
                <span>contato@urbancar.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © 2024 UrbanCar. Todos os direitos reservados.
            </p>
            <div className="footer__legal">
              <a href="#" className="footer__legal-link">Termos de Uso</a>
              <a href="#" className="footer__legal-link">Política de Privacidade</a>
              <a href="#" className="footer__legal-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};