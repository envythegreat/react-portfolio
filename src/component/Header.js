import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="container">
          <nav>

            <div className="nav-brand">
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
            <div className="menu-icons open" >
              <i className="icon ion-md-menu"> </i>
            </div>
            <ul className="nav-list" >
              <div className="menu-icons close">
                <i className="icon ion-md-close"> </i>
              </div>
              <li className="nav-item">
                <a href="#" className="nav-link" >Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" >About me</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" >Contact Us</a>
              </li>
            </ul>

          </nav>
        </div>
      </header>
    );
  }
}
