import React from 'react';
import './Card.css';

interface CardProps {
  children?: React.ReactNode;
  variant?: 'default' | 'feature' | 'benefit' | 'testimonial';
  hover?: boolean;
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
  icon,
  title,
  description,
}) => {
  const baseClasses = 'card';
  const variantClasses = `card--${variant}`;
  const hoverClasses = hover ? 'card--hover' : '';

  const classes = [
    baseClasses,
    variantClasses,
    hoverClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {icon && (
        <div className="card__icon">
          {icon}
        </div>
      )}
      
      {title && (
        <h3 className="card__title">{title}</h3>
      )}
      
      {description && (
        <p className="card__description">{description}</p>
      )}
      
      {children && (
        <div className="card__content">
          {children}
        </div>
      )}
    </div>
  );
};