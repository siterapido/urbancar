import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  href,
  type = 'button',
  className = '',
}) => {
  const baseClasses = 'button';
  const variantClasses = `button--${variant}`;
  const sizeClasses = `button--${size}`;
  const fullWidthClasses = fullWidth ? 'button--full-width' : '';
  const disabledClasses = disabled ? 'button--disabled' : '';

  const classes = [
    baseClasses,
    variantClasses,
    sizeClasses,
    fullWidthClasses,
    disabledClasses,
    className
  ].filter(Boolean).join(' ');

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};