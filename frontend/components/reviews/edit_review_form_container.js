import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchReview, editReview } from '../../actions/review_actions';
import { selectBusiness } from '../../reducers/selectors';
import { fetchBusiness } from '../../actions/business_actions';
import { logout } from '../../actions/session_action'
import ReviewForm from './edit_review_form';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId)
  }

  render() {
    const { review, formType, submitReview, authorId } = this.props;

    return (
      <ReviewForm
        review={review}
        formType={formType}
        submitReview={submitReview}
        authorId={authorId}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const businessId = parseInt(ownProps.match.params.businessId);
  const business = selectBusiness(state.entities, businessId);
  let review;

  if (state.entities.reviews.lenght > 0) {
    review = state.entities.reviews.find(review => {
      return review.id === ownProps.match.params.reviewId;
    })
  }

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
