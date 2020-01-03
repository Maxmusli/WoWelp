import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import BusinessShow from './business_show';
import { selectReviewsForBusiness, selectBusiness } from '../../reducers/selectors';
import { deleteReview } from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => {
  
  const businessId = parseInt(ownProps.match.params.businessId);
  const business = selectBusiness(state.entities, businessId);
  const reviews = selectReviewsForBusiness(state.entities, business)
  return ({
    businessId,
    business,
    reviews,
    find: state.filters.find,
    near: state.filters.near,
  })
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);