import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 5,
      body: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  redirectToShow() {
    const url = `/search/${this.props.match.params.businessId}`
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const businessId = this.props.match.params.businessId;
    const review = Object.assign({}, this.state, { business_id: businessId });
    this.props.createReview(review);
    this.redirectToShow();
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number" 
            value={this.state.rating}
            onChange={this.handleInput('rating')}
          />
          <label>Select your rating</label>
          <textarea
            className="" 
            cols="30" 
            rows="10"
            value={this.state.body} 
            onChange={this.handleInput('body')}
          />
          <input type="submit" value="Post Review" />
        </form>
      </div>
    )
  }
};

export default withRouter(ReviewForm);