import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  variant?: 'default' | 'highlight' | 'dark';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  description,
  centered = true,
  variant = 'default',
  className = '',
}) => {
  const baseClasses = 'section-title';
  const centeredClasses = centered ? 'section-title--centered' : '';
  const variantClasses = `section-title--${variant}`;

  const classes = [
    baseClasses,
    centeredClasses,
    variantClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {subtitle && (
        <span className="section-title__subtitle">{subtitle}</span>
      )}
      
      <h2 className="section-title__title">{title}</h2>
      
      {description && (
        <p className="section-title__description">{description}</p>
      )}
    </div>
  );
};