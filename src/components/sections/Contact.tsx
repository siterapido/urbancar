import React, { useState } from 'react';
import { FiMessageCircle, FiMail, FiPhone, FiMapPin, FiSend, FiInstagram } from 'react-icons/fi';
import { SectionTitle } from '../shared/SectionTitle';
import { Button } from '../shared/Button';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o UrbanCar.');
    window.open(`https://wa.me/5569993371212?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/urbancarmobilidade/', '_blank');
  };

  return (
    <section id="contato" className="contact">
      <div className="container">
        <SectionTitle
          subtitle="Entre em Contato"
          title="Estamos aqui para ajudar você"
          description="Dúvidas, sugestões ou precisa de suporte? Nossa equipe está pronta para atender."
        />

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__methods">
              <div className="contact__method" onClick={openWhatsApp}>
                <div className="contact__method-icon">
                  <FiMessageCircle />
                </div>
                <div className="contact__method-content">
                  <h3>WhatsApp</h3>
                  <p>Suporte direto e rápido</p>
                  <span>+55 69 9337-1212</span>
                </div>
              </div>

              <div className="contact__method">
                <div className="contact__method-icon">
                  <FiMail />
                </div>
                <div className="contact__method-content">
                  <h3>E-mail</h3>
                  <p>Respondemos em até 24h</p>
                  <span>contato@urbancar.com</span>
                </div>
              </div>

              <div className="contact__method" onClick={openInstagram}>
                <div className="contact__method-icon">
                  <FiInstagram />
                </div>
                <div className="contact__method-content">
                  <h3>Instagram</h3>
                  <p>Siga para novidades</p>
                  <span>@urbancarmobilidade</span>
                </div>
              </div>

              <div className="contact__method">
                <div className="contact__method-icon">
                  <FiPhone />
                </div>
                <div className="contact__method-content">
                  <h3>Telefone</h3>
                  <p>Seg-Sex, 8h às 18h</p>
                  <span>+55 69 9337-1212</span>
                </div>
              </div>

              <div className="contact__method">
                <div className="contact__method-icon">
                  <FiMapPin />
                </div>
                <div className="contact__method-content">
                  <h3>Localização</h3>
                  <p>João Pessoa e Porto Velho</p>
                  <span>Atendimento local</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-container">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject">Assunto</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="passenger">Dúvidas sobre corridas</option>
                  <option value="driver">Quero ser motorista</option>
                  <option value="support">Suporte técnico</option>
                  <option value="partnership">Parcerias</option>
                  <option value="other">Outros</option>
                </select>
              </div>

              <div className="contact__form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos como podemos ajudar..."
                  required
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="md" fullWidth>
                <FiSend />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};