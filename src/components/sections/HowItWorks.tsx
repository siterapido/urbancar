import React from 'react';
import { FiSmartphone, FiUserPlus, FiNavigation, FiGift, FiCheckCircle, FiClock, FiDollarSign } from 'react-icons/fi';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../shared/Card';
import './HowItWorks.css';

export const HowItWorks: React.FC = () => {
  const passengerSteps = [
    {
      step: "1",
      icon: <FiSmartphone />,
      title: "Baixe o app",
      description: "Disponível para iOS e Android. Download rápido e gratuito."
    },
    {
      step: "2",
      icon: <FiUserPlus />,
      title: "Cadastre-se",
      description: "Processo simples e seguro. Dados protegidos com criptografia."
    },
    {
      step: "3",
      icon: <FiNavigation />,
      title: "Solicite sua corrida",
      description: "Escolha destino, veja o preço e confirme sua viagem."
    },
    {
      step: "4",
      icon: <FiGift />,
      title: "Aproveite os descontos",
      description: "Acumule pontos e ganhe brindes a cada corrida."
    }
  ];

  const driverSteps = [
    {
      step: "1",
      icon: <span>🚗</span>,
      title: "Cadastre-se como motorista",
      description: "Envie seus documentos e dados do veículo para análise."
    },
    {
      step: "2",
      icon: <FiCheckCircle />,
      title: "Aguarde aprovação",
      description: "Verificação rápida e treinamento online personalizado."
    },
    {
      step: "3",
      icon: <FiClock />,
      title: "Comece a receber corridas",
      description: "Entre online e comece a atender passageiros imediatamente."
    },
    {
      step: "4",
      icon: <FiDollarSign />,
      title: "Receba seus ganhos",
      description: "Pagamentos semanais direto na sua conta bancária."
    }
  ];

  return (
    <section id="como-funciona" className="how-it-works">
      <div className="container">
        <SectionTitle
          subtitle="Como Funciona"
          title="Simples, rápido e eficiente"
          description="Descubra como é fácil usar o UrbanCar, seja como passageiro ou motorista. Processo otimizado para sua conveniência."
        />

        <div className="how-it-works__content">
          <div className="how-it-works__section">
            <div className="how-it-works__header">
              <div className="how-it-works__icon">
                <FiSmartphone />
              </div>
              <h3 className="how-it-works__title">Para Passageiros</h3>
              <p className="how-it-works__description">
                Em 4 passos simples, você está pronto para viajar com segurança e economia
              </p>
            </div>

            <div className="how-it-works__steps">
              {passengerSteps.map((step, index) => (
                <div key={index} className="how-it-works__step" data-step={step.step}>
                  <Card
                    variant="default"
                    className="card--step"
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="how-it-works__divider">
            <div className="how-it-works__divider-line"></div>
            <div className="how-it-works__divider-logo">
              <img 
                src="/Imagens/logo-urbancar.png" 
                alt="UrbanCar" 
                className="how-it-works__logo"
              />
            </div>
            <div className="how-it-works__divider-line"></div>
          </div>

          <div className="how-it-works__section">
            <div className="how-it-works__header">
              <div className="how-it-works__icon">
                <span>🚗</span>
              </div>
              <h3 className="how-it-works__title">Para Motoristas</h3>
              <p className="how-it-works__description">
                Processo de cadastro otimizado para você começar a ganhar dinheiro rapidamente
              </p>
            </div>

            <div className="how-it-works__steps">
              {driverSteps.map((step, index) => (
                <div key={index} className="how-it-works__step" data-step={step.step}>
                  <Card
                    variant="default"
                    className="card--step"
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="how-it-works__visual">
          <div className="how-it-works__timeline">
            <div className="how-it-works__timeline-line"></div>
            <div className="how-it-works__timeline-steps">
              <div className="how-it-works__timeline-step how-it-works__timeline-step--active">
                <span>Download</span>
              </div>
              <div className="how-it-works__timeline-step">
                <span>Cadastro</span>
              </div>
              <div className="how-it-works__timeline-step">
                <span>Primeira Corrida</span>
              </div>
              <div className="how-it-works__timeline-step">
                <span>Benefícios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};