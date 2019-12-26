import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import { selectBusiness } from '../../reducers/selectors';
import { fetchBusiness } from '../../actions/business_actions';
import { logout } from '../../actions/session_action'

const mapStateToProps = (state, ownProps) => {

  const businessId = parseInt(ownProps.match.params.businessId);
  const business = selectBusiness(state.entities, businessId);
  const review = {
    rating: 5,
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
)(ReviewForm));
