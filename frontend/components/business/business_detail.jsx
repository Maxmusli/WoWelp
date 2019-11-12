import React, { Component } from 'react'
import ReviewFormContainer from '../reviews/review_form_container';


export default class BusinessDetail extends Component {
  
  render() {
    const {
      description, picture, name, phone, category, sub_category,
      price_range, reservation, take_out, address, city, state,
    } = this.props.business

    return (
      <div className="business-show-container">
        <div className="business-show-img">
          <div>picture1</div>
          <div>picture2</div>
          <div>picture3</div>
          <div>picture4</div>
        </div>

        <div className="main-show-wrapper">
          <div className="main-show-section-wrapper">
            <div className="main-show-section">
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
                  <Link className="function-btn" to="/review">
                      <h3>Write a Review</h3>
                  </Link>
                  <button className="function-btn">
                    <div>
                      <h3>Add Photo</h3>
                    </div>
                  </button>
                  <button className="function-btn">
                    <div>
                      <h3>Share</h3>
                    </div>  
                  </button>
                  <button className="function-btn">
                    <div>
                      <h3>Save</h3>
                    </div>  
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
                    <div>{city}</div>
                    <div>{state}</div>
                  </div>

                  <div className="business-index">
                    <a href="">All Businesses</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
