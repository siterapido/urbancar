import React from 'react';
import { FiZap, FiDollarSign, FiHeart, FiShield, FiClock, FiUsers } from 'react-icons/fi';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../shared/Card';
import './Features.css';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <FiZap />,
      title: "Agilidade",
      description: "Tempos de espera reduzidos e chegada mais rápida ao destino.",
      highlight: "Passageiros"
    },
    {
      icon: <FiDollarSign />,
      title: "Preços Justos",
      description: "Transparência total com valores competitivos e sem taxas ocultas.",
      highlight: "Passageiros"
    },
    {
      icon: <FiHeart />,
      title: "Descontos",
      description: "Programa de fidelidade com benefícios reais a cada corrida.",
      highlight: "Passageiros"
    },
    {
      icon: <FiShield />,
      title: "Confiança",
      description: "Motoristas verificados e corridas confirmadas sem cancelamento.",
      highlight: "Todos"
    },
    {
      icon: <FiClock />,
      title: "Mais Ganhos",
      description: "Taxas menores, mais corridas e bônus por desempenho.",
      highlight: "Motoristas"
    },
    {
      icon: <FiUsers />,
      title: "Suporte Próximo",
      description: "Equipe de apoio local que entende suas necessidades.",
      highlight: "Motoristas"
    }
  ];

  return (
    <section id="diferenciais" className="features">
      <div className="container">
        <SectionTitle
          subtitle="Nossos Diferenciais"
          title="UrbanCar é diferente porque pensa em você"
          description="Desenvolvemos cada funcionalidade pensando no que realmente importa: sua experiência, sua segurança e sua satisfação."
        />

        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="features__item">
              <Card
                variant="feature"
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="features__card"
              />
              <div className={`features__highlight features__highlight--${feature.highlight.toLowerCase()}`}>
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="features__comparison">
          <div className="features__comparison-content">
            <div className="features__comparison-section">
              <h3>Para passageiros</h3>
              <ul>
                <li>✅ Agilidade, preços justos, descontos e confiança</li>
                <li>✅ Sem cancelamentos inesperados</li>
                <li>✅ Programa de fidelidade real</li>
                <li>✅ Suporte local dedicado</li>
              </ul>
            </div>
            
            <div className="features__comparison-divider">
              <div className="features__comparison-logo">
                <img 
                  src="/Imagens/logo-urbancar.png" 
                  alt="UrbanCar" 
                  className="features__logo"
                />
              </div>
            </div>

            <div className="features__comparison-section">
              <h3>Para motoristas</h3>
              <ul>
                <li>✅ Mais ganhos, suporte próximo e valorização</li>
                <li>✅ Taxas menores que a concorrência</li>
                <li>✅ Bônus e incentivos frequentes</li>
                <li>✅ Corridas garantidas e clientes fiéis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};