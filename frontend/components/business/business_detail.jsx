import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewFormContainer from '../reviews/review_form_container';
import { ReviewLink } from '../../util/link_util';
import { fetchBusiness } from '../../actions/business_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ReviewListContainer from '../reviews/review_list_container'

class BusinessDetail extends Component {
  componentDidMount() {
    fetchBusiness(this.props.match.params.businessId)
  }

  render() {
    const {
      description, pictureUrls, name, phone, category, sub_category,
      price_range, reservation, take_out, address, city, state, id,
      average_rating, reviews
    } = this.props.business
    
    const reviewList = (reviews) => (
      reviews.map(review => (
        <ReviewListContainer
          review={review}
          key={review.id}
          deleteReview={this.props.deleteReview}
        />
      ))
    )
    
    if (!this.props.business.name) return null;
     
    return (
      <div className="business-show-container">
        <div className="business-show-img">
          <div className="first-pic">
            <img src={pictureUrls[1]} alt=""/>
          </div>
          <div><img src={pictureUrls[2]} alt=""/></div>
          <div><img src={pictureUrls[3]} alt="" /></div>
          <div className="last-pic">
            <img src={pictureUrls[4]} alt="" />
          </div>
        </div>
        <div className="bar-2"></div>
        <div className="main-show-wrapper">
          <div className="main-show-section-wrapper">
            <div className="main-show-section">
              <div className="left-section">
                <div className="business-info">
                  <div className="business-name">
                    {name}
                  </div>
                  <div className="business-rating">
                    {average_rating || 'no review yet'}
                  </div>
                  <div className="business-category">
                    <div>
                      {price_range}
                    </div>
                    <div>
                      {category}
                    </div>
                    <div>
                      {sub_category}
                    </div>
                  </div>
                </div>

                <div className="functionalities">
                  <div className="function-btn">
                    <ReviewLink 
                      to={`/search/${id}/review`}
                      component={ReviewFormContainer}
                      label="Write a Review"
                    >
                    </ReviewLink>
                  </div>
                  <div className="function-btn">
                    <a>
                      Add Photo
                    </a>
                  </div>
                  <div className="function-btn">
                    <a>
                      Share
                    </a>  
                  </div>
                  <div className="function-btn">
                    <a>
                      Save
                    </a>  
                  </div>
                </div>

                <div className="about-business">
                  <h2>About the Business</h2>
                  <p>{description}</p>
                </div>

                <div className="reviews">
                  <h3>Recommended Reviews</h3>
                  <div>
                    {reviewList(this.props.reviews)}
                  </div>
                </div>
              </div>

              <div className="right-section">
                <div className="map">

                </div>

                <div className="info">
                  <div>
                    <span>{phone}</span>
                  </div>

                  <div className="address">
                    <span>{address}</span>
                    <span>{city}</span>
                    <span>{state}</span>
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

export default withRouter(BusinessDetail)