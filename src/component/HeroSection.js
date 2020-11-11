import React from 'react';
import '../styles/HeroSection.css'
import '../styles/App.css'
import {Button} from './Button'
import {SlightWave} from './SVG'


function HeroSection(){
  return(
    <div className="hero-container">
      {/* <video src={require('../styles/vid/IMG_0226.MOV')} autoPlay loop muted /> */}
      <img  src={require('../styles/img/wallpaper.jpg')} alt='wall' />
      <h1>Alouani Mohamed Habib</h1>
      <p>It's None Time, Yeet it</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">SEE MORE!</Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">MY GITHUB <i class="fab fa-github"></i></Button>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <SlightWave />
      </svg>
    </div>
  )
}

export default HeroSection
