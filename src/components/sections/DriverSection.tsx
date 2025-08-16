import React from 'react';
import { FiDollarSign, FiX, FiGift, FiMapPin, FiTrendingUp, FiShield } from 'react-icons/fi';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import './DriverSection.css';

export const DriverSection: React.FC = () => {
  const benefits = [
    {
      icon: <FiDollarSign />,
      title: "Ganhos justos",
      description: "Menos taxas, mais dinheiro no bolso. Transparência total nos valores."
    },
    {
      icon: <FiX />,
      title: "Menos cancelamentos",
      description: "Corridas confirmadas e clientes fiéis. Trabalhe com mais previsibilidade."
    },
    {
      icon: <FiGift />,
      title: "Bônus e incentivos",
      description: "Reconhecimento para quem entrega qualidade e excelência no atendimento."
    },
    {
      icon: <FiMapPin />,
      title: "Atuação local",
      description: "Trabalhe onde conhece e se sente seguro, nas suas cidades favoritas."
    }
  ];

  const additionalBenefits = [
    {
      icon: <FiTrendingUp />,
      title: "Crescimento garantido",
      description: "Mais corridas, renda estável e oportunidades de crescimento profissional."
    },
    {
      icon: <FiShield />,
      title: "Suporte dedicado",
      description: "Equipe de apoio local, pronta para ajudar quando você precisar."
    }
  ];

  return (
    <section id="motoristas" className="driver-section">
      <div className="container">
        <div className="driver-section__header">
          <span className="driver-section__subtitle">Para Motoristas</span>
          <div className="driver-section__title-highlight">
            <div className="driver-section__title-item">
              <span className="driver-section__title-icon">📈</span>
              <span className="driver-section__title-text">Mais corridas</span>
            </div>
            <div className="driver-section__title-item">
              <span className="driver-section__title-icon">💰</span>
              <span className="driver-section__title-text">Menos taxas</span>
            </div>
            <div className="driver-section__title-item">
              <span className="driver-section__title-icon">💵</span>
              <span className="driver-section__title-text">Mais ganhos</span>
            </div>
          </div>
          <p className="driver-section__description">
            Junte-se a uma plataforma que valoriza seu trabalho e oferece condições justas para você prosperar como motorista profissional.
          </p>
        </div>

        <div className="driver-section__content">
          <div className="driver-section__benefits">
            <div className="driver-section__main-benefits">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  variant="benefit"
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>

            <div className="driver-section__additional-benefits">
              {additionalBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  variant="feature"
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>

          <div className="driver-section__visual">
            <div className="driver-section__image-container">
              <img 
                src="/Imagens/o-homem-arabe-usa-o-telefone-inteligente-enquanto-espera-o-carregamento-da-bateria-no-carro-eco-awarness.jpg" 
                alt="Motorista usando o app UrbanCar" 
                className="driver-section__image driver-section__image--main"
              />
              
              <img 
                src="/Imagens/mulher-carregando-seu-carro-e-olhando-para-o-cherger-no-telefone-bher.jpg" 
                alt="Motorista verificando ganhos no aplicativo" 
                className="driver-section__image driver-section__image--secondary"
              />
            </div>

            <div className="driver-section__earnings-card">
              <div className="driver-section__earnings-header">
                <img 
                  src="/Imagens/logo-urbancar.png" 
                  alt="UrbanCar" 
                  className="driver-section__logo"
                />
                <div className="driver-section__earnings-title">
                  <h4>Seus Ganhos</h4>
                  <p>Esta semana</p>
                </div>
              </div>
              
              <div className="driver-section__earnings-amount">
                <span className="driver-section__currency">R$</span>
                <span className="driver-section__value">1.247</span>
                <span className="driver-section__period">,80</span>
              </div>
              
              <div className="driver-section__earnings-stats">
                <div className="driver-section__stat">
                  <span className="driver-section__stat-label">Corridas</span>
                  <span className="driver-section__stat-value">84</span>
                </div>
                <div className="driver-section__stat">
                  <span className="driver-section__stat-label">Taxa</span>
                  <span className="driver-section__stat-value">12%</span>
                </div>
                <div className="driver-section__stat">
                  <span className="driver-section__stat-label">Bônus</span>
                  <span className="driver-section__stat-value">R$ 150</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="driver-section__cta">
          <div className="driver-section__cta-content">
            <h3>Pronto para aumentar sua renda?</h3>
            <p>Cadastre-se agora e receba bônus especial nas primeiras 10 corridas</p>
            <div className="driver-section__buttons">
              <Button 
                variant="secondary" 
                size="md"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=ikKpss.urbancar&pli=1', '_blank')}
              >
                Quero Ser Motorista
              </Button>
              <Button variant="ghost" size="md">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};