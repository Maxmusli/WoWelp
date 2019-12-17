import { connect } from 'react-redux';
import { changeFilter } from '../../actions/filter_actions';
import BusinessIndex from './business_index';
import { selectBusinesses } from '../../reducers/selectors';

const mapStateToProps = state => {
  let businesses = Object.values(state.entities.businesses)

  return ({
    businesses: businesses,
    find: state.filters.find,
    near: state.filters.near,
    // filterBusinesses: selectBusinesses(businesses, )
  })
};

const mapDispatchToProps = dispatch => ({
  changeFilter: (filter, value) => dispatch(
    changeFilter(filter, value)
  ),
  // fetchBusinesses: (filters) => dispatch(fetchBusinesses(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);