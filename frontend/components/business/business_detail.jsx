import React, { Component } from 'react'

export default class BusinessDetail extends Component {
  
  render() {
    debugger
    const {
      description, picture, name, phone, category, sub_category,
      price_range, reservation, take_out, address
    } = this.props.business

    return (
      <div className="business-show-container">
        <div className="business-show-img">
          <div>picture1</div>
          <div>picture2</div>
          <div>picture3</div>
          <div>picture4</div>
        </div>

        <div className="main-section">
          <div className="left-section">
            <div className="business-info">
              <div className="business-name">
                {name}
              </div>
              <div className="business-rating">
                no reviews yet
              </div>
              <div className="business-category">
                {price_range}
                {category}
                {sub_category}
              </div>
            </div>

            <div className="functionalities">
              <button className="function-btn">
                <h3>Write a Review</h3>
              </button>
              <button className="function-btn">
                <h3>Add Photo</h3>
              </button>
              <button className="function-btn">
                <h3>Share</h3>
              </button>
              <button className="function-btn">
                <h3>Save</h3>
              </button>
            </div>

            <div className="about-business">
              <h2>About the Business</h2>
              <p>{description}</p>
            </div>

            <div className="reviews">
              Reviews
            </div>
          </div>

          <div className="right-section">
            <div className="map">
              map
            </div>

            <div className="info">
              <div>
                <div>{phone}</div>
              </div>

              <div>
                <div>{address}</div>
              </div>

              <div className="business-index">
                <a href="">All businesses</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
