import React, { Component } from 'react'

export default class SubNavCategories extends Component {
  constructor() {
    super();

    // this.handleEnter = this.handleEnter.bind(this);
    // this.handleLeave = this.handleLeave.bind(this);
  }

  handleEnter(e) {
    // e.preventDefault();

    // const restaurantsNav = document.querySelector('.restaurants-nav');
    // const servicesNav = document.querySelector('.services-nav');
    // const citiesNav = document.querySelector('.cities-nav');
    // const moreNav = document.querySelector('.more-nav');

    // if ($(".category").hasClass("restaurants")) {
    //   restaurantsNav.addEventListener("show")
    // }
    // if ($(".category").hasClass("services")) {
    //   servicesNav.addEventListener("show")
    // }
    // if ($(".category").hasClass("cities")) {
    //   citiesNav.addEventListener("show")
    // }
    // if ($(".category").hasClass("more")) {
    //   moreNav.addEventListener("show")
    // }
    
  }

  handleLeave(e) {
    // e.preventDefault();

    // const restaurantsNav = document.querySelector('.restaurants-nav');
    // const servicesNav = document.querySelector('.services-nav');
    // const citiesNav = document.querySelector('.cities-nav');
    // const moreNav = document.querySelector('.more-nav');

    // if ($(".category").hasClass("restaurants")) {
    //   restaurantsNav.removeEventListener("show")
    // } else if ($(".category").hasClass("services")) {
    //   servicesNav.removeEventListener("show")
    // } else if ($(".category").hasClass("cities")) {
    //   citiesNav.removeEventListener("show")
    // } else if ($(".category").hasClass("more")) {
    //   moreNav.removeEventListener("show")
    // }
  }

  render() {
    const restaurantsDropDown = (
      <div className="sub-nav-drop-down">
        <ul className="restaurants-nav">
          <li>
            <a href="">restaurants</a>
          </li>
        </ul>
      </div>
    )

    const servicesDropDown = (
      <div className="sub-nav-drop-down">
        <ul className="services-nav">
          <li>
            <a href="">services</a>
          </li>
        </ul>
      </div>
    )

    const citiesDropDown = (
      <div className="sub-nav-drop-down">
        <ul className="cities-nav">
          <li>
            <a href="">cities</a>
          </li>
        </ul>
      </div>
    )

    const moreDropDown = (
      <div className="sub-nav-drop-down">
        <ul className="more-nav">
          <li>
            <a href="">more</a>
          </li>
        </ul>
      </div>
    )

    return (
      <div className="sub-nav-categories">
        <div className="wrapper">
          <div className="container">
            <div className="category restaurants" onPointerEnter={
              (e) => { this.handleEnter(e) }
            } onPointerLeave={
              (e) => { this.handleLeave(e) }
            }>
              <a href="">
                <div className="header-wrapper">
                  <i className="fas fa-utensils"></i>
                  <h3>Restaurants</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
              {/* {restaurantsDropDown} */}
            </div>
            <div className="category services" onPointerEnter={
              (e) => { this.handleEnter(e) }
            } onPointerLeave={
              (e) => { this.handleLeave(e) }
            }>
              <a href="">
                <div className="header-wrapper">
                  <i className="fas fa-hammer"></i>
                  <h3>Services</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
              {/* {servicesDropDown} */}
            </div>
            <div className="category cities" onPointerEnter={
              (e) => { this.handleEnter(e) }
            } onPointerLeave={
              (e) => { this.handleLeave(e) }
            }>
              <a href="">
                <div className="header-wrapper">
                  <i className="fas fa-chess-rook"></i>
                  <h3>Cities</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
              {/* {citiesDropDown} */}
            </div>
            <div className="category " onPointerEnter={
              (e) => { this.handleEnter(e) }
            } onPointerLeave={
              (e) => { this.handleLeave(e) }
            }>
              <a href="">
                <div className="header-wrapper">
                  <h3>More</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
              {/* {moreDropDown} */}
            </div>

            <div className="blink">
            </div>

            <div className="category">
              <a href="">
                <div className="header-wrapper">
                  <i className="fas fa-feather-alt"></i>
                  <h3>Write a Review</h3>
                </div>
              </a>
            </div>
            <div className="category">
              <a href="">
                <div className="header-wrapper business">
                  <i className="fas fa-briefcase"></i>
                  <h3>For Businesses</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
