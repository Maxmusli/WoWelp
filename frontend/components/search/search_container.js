import { connect } from 'react-redux';

import Search from './search';
import { changeFilter } from '../../actions/filter_actions'

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
)(Search);