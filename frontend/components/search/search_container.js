import { connect } from 'react-redux';

import Search from './search';
import { fetchBusinesses } from '../../actions/business_actions'
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  businesses: asArray(state.entities),
   
})

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: (filter) => dispatch(fetchBusinesses(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);