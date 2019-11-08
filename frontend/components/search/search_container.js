import { connect } from 'react-redux';

import Search from './search';
import { fetchBusinesses } from '../../actions/business_actions'
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  businesses: asArray(state.entities),
})

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);