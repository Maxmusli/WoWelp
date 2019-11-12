import { connect } from 'react-redux';
import SubNav from './sub_nav';
import { logout } from '../../actions/session_action';
import { withRouter } from 'react-router-dom';
import { changeFilter } from '../../actions/filter_actions'


const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubNav));