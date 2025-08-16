import React from 'react';
import { FiDollarSign, FiPackage, FiMapPin, FiSmartphone, FiGift } from 'react-icons/fi';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import './PassengerSection.css';

export const PassengerSection: React.FC = () => {
  const benefits = [
    {
      icon: <span>🚗</span>,
      title: "Corridas sem cancelamento",
      description: "Aceitamos e concluímos sua viagem. Nada de esperar e ficar na mão."
    },
    {
      icon: <FiDollarSign />,
      title: "Descontos e brindes",
      description: "Fidelidade que vale a pena com benefícios reais a cada corrida."
    },
    {
      icon: <FiPackage />,
      title: "Entregas rápidas",
      description: "Documentos e encomendas no mesmo dia, com segurança garantida."
    },
    {
      icon: <FiMapPin />,
      title: "Foco local",
      description: "Motoristas que conhecem sua cidade e chegam mais rápido."
    }
  ];

  return (
    <section id="passageiros" className="passenger-section">
      <div className="container">
        <SectionTitle
          subtitle="Para Passageiros"
          title="Viaje e envie com mais segurança e vantagens"
          description="Desfrute de um serviço de transporte e entrega que realmente pensa em você, com benefícios exclusivos e a confiabilidade que você merece."
        />

        <div className="passenger-section__content">
          <div className="passenger-section__benefits">
            <div className="passenger-section__cards">
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
          </div>

          <div className="passenger-section__visual">
            <div className="passenger-section__image-container">
              <img 
                src="/Imagens/movendo-se-para-tras-ute-garota-de-cabelo-preto-experimentando-seu-novo-carro-caro-no-salao-automovel.jpg" 
                alt="Passageira satisfeita com o serviço UrbanCar" 
                className="passenger-section__image"
              />
              
              <div className="passenger-section__floating-features">
                <div className="passenger-section__floating-item passenger-section__floating-item--1">
                  <FiSmartphone />
                  <span>Fácil de usar</span>
                </div>
                <div className="passenger-section__floating-item passenger-section__floating-item--2">
                  <FiGift />
                  <span>Descontos exclusivos</span>
                </div>
                <div className="passenger-section__floating-item passenger-section__floating-item--3">
                  <FiMapPin />
                  <span>Rastreamento em tempo real</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="passenger-section__cta">
          <div className="passenger-section__cta-content">
            <h3>Pronto para começar?</h3>
            <p>Baixe o app e ganhe desconto na primeira corrida</p>
            <div className="passenger-section__buttons">
              <Button variant="primary" size="lg">
                <FiSmartphone />
                Baixar o App e Começar Agora
              </Button>
              <Button variant="outline" size="lg">
                Ver Como Funciona
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};