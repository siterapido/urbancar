import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SectionTitle } from '../shared/SectionTitle';
import './About.css';

export const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: "/Imagens/homem-no-carro-dirigindo.jpg",
      alt: "Motorista dirigindo com segurança",
      title: "Motoristas Profissionais"
    },
    {
      src: "/Imagens/pessoa-que-se-prepara-para-obter-carta-de-conducao.jpg",
      alt: "Pessoa se preparando para dirigir",
      title: "Preparação e Segurança"
    },
    {
      src: "/Imagens/movendo-se-para-tras-ute-garota-de-cabelo-preto-experimentando-seu-novo-carro-caro-no-salao-automovel.jpg",
      alt: "Cliente satisfeita com o serviço",
      title: "Clientes Satisfeitos"
    }
  ];

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, [images]);

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <SectionTitle
              subtitle="Nossa História"
              title="Mais do que transporte: conectamos histórias"
              description="Há 5 anos, a UrbanCar conecta passageiros e motoristas com segurança, rapidez e benefícios reais. Nosso compromisso é oferecer um serviço local de confiança, onde cada corrida vale a pena e cada entrega chega no tempo certo."
              centered={false}
              variant="highlight"
            />

            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-number">5+</div>
                <div className="about__stat-label">Anos</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-number">2</div>
                <div className="about__stat-label">Cidades</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-number">1000+</div>
                <div className="about__stat-label">Motoristas</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-number">50k+</div>
                <div className="about__stat-label">Corridas</div>
              </div>
            </div>
          </div>

          <div className="about__visual">
            <div className="about__carousel">
              <div className="about__carousel-container">
                <div 
                  className="about__carousel-track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="about__carousel-slide">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="about__carousel-image"
                      />
                      <div className="about__carousel-overlay">
                        <h3 className="about__carousel-title">{image.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                className="about__carousel-btn about__carousel-btn--prev"
                onClick={prevSlide}
                aria-label="Imagem anterior"
              >
                <FiChevronLeft />
              </button>

              <button 
                className="about__carousel-btn about__carousel-btn--next"
                onClick={nextSlide}
                aria-label="Próxima imagem"
              >
                <FiChevronRight />
              </button>

              <div className="about__carousel-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`about__carousel-dot ${index === currentSlide ? 'about__carousel-dot--active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};