import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions'

const mapStateToProps = state => ({
  businesses: Object.values(state.entities.businesses),
})

