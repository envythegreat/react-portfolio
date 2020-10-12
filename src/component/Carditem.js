import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h3 className="card__text__header">Hello</h3>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          <div className="btn__info">
            <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--medium"><i class="fab fa-github" /> GITHUB LINK</Button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;