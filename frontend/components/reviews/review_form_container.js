import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import { selectBusiness } from '../../reducers/selectors';
import { fetchBusiness } from '../../actions/business_actions';
import { logout } from '../../actions/session_action';

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBusiness(this.props.match.params.businessId)
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
  const review = {
    rating: 0,
    body: ''
  };

  return ({
    businessId,
    business,
    currentUser: state.entities.users[state.session.id],
    review,
    formType: 'Post Review'
  })
};

const mapDispatchToProps = dispatch => ({
  submitReview: review => dispatch(createReview(review)),
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  logout: () => dispatch(logout()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateReviewForm));
