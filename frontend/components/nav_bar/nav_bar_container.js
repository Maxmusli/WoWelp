import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_action';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));