import { connect } from 'react-redux';
import UserShowNav from './user_show_nav';
import { logout } from '../../actions/session_action';
import { withRouter } from 'react-router-dom';
import { changeFilter } from '../../actions/filter_actions'


const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  find: state.filters.find,
  near: state.filters.near
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShowNav));