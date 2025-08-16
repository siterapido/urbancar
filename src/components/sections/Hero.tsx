import React from 'react';
import { FiSmartphone } from 'react-icons/fi';
import { Button } from '../shared/Button';
import './Hero.css';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              UrbanCar – Mobilidade <span className="hero__title-highlight">rápida</span>, <span className="hero__title-highlight">justa</span> e <span className="hero__title-highlight">próxima</span> de você
            </h1>
            
            <p className="hero__subtitle">
              Corridas e entregas com agilidade, benefícios e respeito. 
              João Pessoa e Porto Velho.
            </p>

            <div className="hero__cta">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=ikKpss.urbancar&pli=1', '_blank')}
              >
                <FiSmartphone />
                Baixar App
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => scrollToSection('motoristas')}
              >
                🚗 Sou Motorista
              </Button>
            </div>

            <div className="hero__features">
              <div className="hero__feature">
                <span className="hero__feature-icon">🚗</span>
                <span className="hero__feature-text">Corridas Garantidas</span>
              </div>
              <div className="hero__feature">
                <span className="hero__feature-icon">💰</span>
                <span className="hero__feature-text">Preços Justos</span>
              </div>
              <div className="hero__feature">
                <span className="hero__feature-icon">📍</span>
                <span className="hero__feature-text">Local e Confiável</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__phone-mockup">
              <div className="hero__phone">
                <div className="hero__phone-screen">
                  <div className="hero__app-preview">
                    <img 
                      src="/Imagens/prints - WhatsApp Image 2025-08-07 at 16.53.25.jpeg" 
                      alt="Print do app UrbanCar" 
                      className="hero__app-screenshot"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};