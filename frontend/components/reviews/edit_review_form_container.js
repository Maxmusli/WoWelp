import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchReview, editReview } from '../../actions/review_actions';
import { selectBusiness } from '../../reducers/selectors';
import { fetchBusiness } from '../../actions/business_actions';
import { logout } from '../../actions/session_action'
import ReviewForm from './review_form';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId)
  }

  render() {
    const { review, formType, submitReview, business, fetchBusiness } = this.props;

    if (!review) return null;
    
    return (
      <ReviewForm
        review={review}
        formType={formType}
        submitReview={submitReview}
        business={business}
        fetchBusiness={fetchBusiness}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const businessId = parseInt(ownProps.match.params.businessId);
  const business = selectBusiness(state.entities, businessId);
  const reviewId = parseInt(ownProps.match.params.reviewId);
  const review = state.entities.reviews[reviewId];
  
  return ({
    businessId,
    business,
    currentUser: state.entities.users[state.session.id],
    review,
    formType: 'Update Review'
  })
};

const mapDispatchToProps = dispatch => ({
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  submitReview: review => dispatch(editReview(review)),
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  logout: () => dispatch(logout()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReviewForm));
