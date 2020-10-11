import React from 'react';
import '../styles/Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZE = ['btn-medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  where
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZE[0];
  return(
    <Link className="btn-mobile" to={where}>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}  {...{onClick}} {...{type}}>
        {children}
      </button>
    </Link>
  )
};