import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { selectBusiness } from '../../reducers/selectors';
import BusinessShow from './business_show';

const mapStateToProps = (state={}, ownProps) => {
  
  return ({
    businessId: ownProps.match.params.businessId,
    business: selectBusiness(state.entities, parseInt(ownProps.match.params.businessId)),
    // business: state.entities[ownProps.match.params.businessId],
  })
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);