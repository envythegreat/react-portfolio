import React from 'react';
import '../styles/Card.css';
import CardItem from './Carditem';

function Cards() {
  const mytext = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,"

  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src={require('../styles/img/img-1.jpg')}
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={require('../styles/img/img-1.jpg')}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul> */}
          <ul className='cards__items'>
            <CardItem
              src={require('../styles/img/img-1.jpg')}
              label='Mystery'
              path='/services'
              text={mytext}
            />
            <CardItem
              src={require('../styles/img/img-1.jpg')}
              text={mytext}
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={require('../styles/img/img-1.jpg')}
              text={mytext}
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;