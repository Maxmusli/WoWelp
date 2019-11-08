import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    

  }

  handleClick() {
    const businessId = this.props.entities.business.id;
    this.props.histroy.push(`/businesses/${businessId}`)
  }

  render() {
    const { 
      description, picture, name, phone, category, sub_category, 
      price_range, reservation, take_out, address
    } = this.props.business
    
    return (
      <div className="business-container">
        <div className="business-img">
          <img src="" alt=""/>
        </div>

        <div className="business-info">
          <div className="top-section">
            <div className="left-section">
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
              write a review
            </div>
            <div className="business-reservation">
              <label>Reservation:
                {reservation}
              </label>
            </div>
            <div className="business-takeout">
              <label>Takeout:
                {take_out}
              </label>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(BusinessIndexItem)