import React from 'react';
import { FiGift, FiDollarSign, FiTrendingUp, FiClock } from 'react-icons/fi';
import { Button } from '../shared/Button';
import './SpecialOffer.css';

export const SpecialOffer: React.FC = () => {
  return (
    <section id="oferta-especial" className="special-offer">
      <div className="container">
        <div className="special-offer__content">
          <div className="special-offer__header">
            <div className="special-offer__badge">
              <FiGift />
              <span>Oferta Especial</span>
            </div>
            <h2>Ganhe mais na sua primeira corrida</h2>
            <p>Aproveite benefícios exclusivos para começar sua jornada com o UrbanCar</p>
          </div>

          <div className="special-offer__offers">
            <div className="special-offer__card special-offer__card--passenger">
              <div className="special-offer__card-header">
                <FiDollarSign />
                <h3>Passageiros</h3>
              </div>
              <div className="special-offer__benefit">
                <span className="special-offer__discount">50% OFF</span>
                <span className="special-offer__plus">+</span>
                <span className="special-offer__gift">Brinde exclusivo</span>
              </div>
              <p>Na sua primeira corrida</p>
              <Button variant="primary" size="lg" fullWidth>
                Quero meu desconto
              </Button>
            </div>

            <div className="special-offer__card special-offer__card--driver">
              <div className="special-offer__card-header">
                <FiTrendingUp />
                <h3>Motoristas</h3>
              </div>
              <div className="special-offer__benefit">
                <span className="special-offer__bonus">R$ 200</span>
                <span className="special-offer__plus">de bônus</span>
              </div>
              <p>Nas primeiras 10 corridas</p>
              <Button variant="secondary" size="lg" fullWidth>
                Quero meu bônus
              </Button>
            </div>
          </div>

          <div className="special-offer__countdown">
            <FiClock />
            <span>Oferta válida por tempo limitado!</span>
          </div>
        </div>
      </div>
    </section>
  );
};