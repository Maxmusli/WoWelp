import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import { selectBusiness } from '../../reducers/selectors';
import { fetchBusiness } from '../../actions/business_actions'



const mapStateToProps = (state, ownProps) => {

  const businessId = parseInt(ownProps.match.params.businessId);
  const business = selectBusiness(state.entities, businessId);
  return ({
    businessId,
    business,
  })
};

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);