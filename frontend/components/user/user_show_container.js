import { connect } from "react-redux";
import { fetchCurrentUser } from "../../actions/session_action";
import UserShowPage from "./user_show";


const mapStateToProps = state => ({
  users: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: id => dispatch(fetchCurrentUser(id))
})

export default connect(
  mapDispatchToProps,
  mapStateToProps,
)(UserShowPage)