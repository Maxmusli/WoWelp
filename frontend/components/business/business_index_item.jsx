import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewFormContainer from '../reviews/review_form_container';
import { ReviewLink } from '../../util/link_util';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const businessId = this.props.business.id;
    this.props.history.push(`/search/${businessId}`)
  }

  render() {
    const { 
      description, pictureUrls, name, phone, category, sub_category, 
      price_range, reservation, take_out, address, average_rating,
      id
    } = this.props.business
    
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
                {average_rating || 'no reviews yet'}
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