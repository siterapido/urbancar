import React from 'react';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';
import { SectionTitle } from '../shared/SectionTitle';
import { Button } from '../shared/Button';
import './Blog.css';

export const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "UrbanCar chega com novidades em João Pessoa e Porto Velho",
      excerpt: "Descubra as novas funcionalidades e benefícios que preparamos especialmente para você.",
      date: "15 Jan 2024",
      author: "Equipe UrbanCar",
      category: "Novidades"
    },
    {
      title: "5 dicas para economizar nas suas corridas",
      excerpt: "Aprenda estratégias simples para reduzir custos e aproveitar melhor nossos descontos.",
      date: "12 Jan 2024",
      author: "Maria Santos",
      category: "Dicas"
    },
    {
      title: "Como aumentar seus ganhos como motorista UrbanCar",
      excerpt: "Estratégias comprovadas para maximizar sua renda e construir uma clientela fiel.",
      date: "10 Jan 2024",
      author: "João Silva",
      category: "Motoristas"
    }
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <SectionTitle
          subtitle="Blog"
          title="Fique por dentro da UrbanCar"
          description="Notícias, dicas e novidades para passageiros e motoristas estarem sempre atualizados."
        />

        <div className="blog__grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog__card">
              <div className="blog__card-header">
                <span className="blog__category">{post.category}</span>
                <div className="blog__meta">
                  <div className="blog__meta-item">
                    <FiCalendar />
                    <span>{post.date}</span>
                  </div>
                  <div className="blog__meta-item">
                    <FiUser />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
              
              <div className="blog__card-content">
                <h3 className="blog__title">{post.title}</h3>
                <p className="blog__excerpt">{post.excerpt}</p>
                
                <Button variant="ghost" size="sm">
                  Ler mais
                  <FiArrowRight />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="blog__cta">
          <Button variant="outline" size="lg">
            Ver todas as notícias
          </Button>
        </div>
      </div>
    </section>
  );
};