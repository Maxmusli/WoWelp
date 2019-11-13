import { connect } from 'react-redux'
import { changeFilter } from '../../actions/filter_actions'
import CityNav from './city_nav';

const mapStateToProps = state => ({
  find: state.filters.find,
  near: state.filters.near,
})

const mapDispatchToProps = dispatch => ({
  changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityNav);