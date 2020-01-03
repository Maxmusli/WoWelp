import React from 'react';
import { withRouter } from 'react-router-dom';
import { ReviewLink } from '../../util/link_util';
import ReviewFormContainer from '../reviews/review_form_container';
import Ratings from 'react-ratings-declarative';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const businessId = this.props.business.id;
    this.props.history.push(`/search/${businessId}`)
  }

  handlePrice() {
    if (this.props.business.price_range === 'cheap') {
      return '$';
    } else if (this.props.business.price_range === 'medium') {
      return '$$';
    } else if (this.props.business.price_range === 'expensive') {
      return '$$$';
    } else if (this.props.business.price_range === 'luxury') {
      return '$$$$';
    }
  }

  render() {
    const { 
      description, pictureUrls, name, phone, category, sub_category, 
      price_range, reservation, take_out, address, average_rating,
      id
    } = this.props.business

    const starRating = () => {
      if (average_rating) {

        return (
          <Ratings
            rating={parseFloat(average_rating)}
            widgetDimensions="20px"
            widgetSpacings="1px"
            widgetRatedColors="#f8b700"
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        )
      } else {
        return 'no review yet'
      }
    }
    
    return (
      <div className="business-container">
        <div className="business-img">
          <img src={pictureUrls[0]} />
          
        </div>

        <div className="business-info">
          <div className="top-section">
            <div className="left-section">
              <div className="business-name">
                <a onClick={this.handleClick}>
                  {name}
                </a>
              </div>
              <div className="business-rating">
                {starRating()}
              </div>
              <div className="business-category">
                <div>
                  {this.handlePrice()}
                </div>
                <div>
                  {category}
                </div>
                <div>
                  {sub_category}
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="business-phone">
                {phone}
              </div>
              <div className="business-address">
                {address}
              </div>
            </div>
          </div>

          <div className="mid-section">
            <div>
              {description}
            </div>
          </div>

          <div className="bottom-section">
            <div className="business-write-review">
              <ReviewLink
                to={`/search/${id}/review`}
                component={ReviewFormContainer}
                label="Write a Review"
              />
            </div>
            <div className="business-reservation">
              <label>Reservation:</label>
              <div>{reservation}</div>
            </div>
            <div className="business-takeout">
              <label>Takeout:</label>
              <div>{take_out}</div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(BusinessIndexItem)