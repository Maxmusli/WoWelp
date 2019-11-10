import { connect } from 'react-redux';
import { changeFilter } from '../../actions/filter_actions';
import BusinessIndex from './business_index';

const mapStateToProps = state => ({
  businesses: Object.values(state.entities.businesses),
  find: state.filters.find,
  near: state.filters.near,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: (filter, value) => dispatch(
    changeFilter(filter, value)
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);