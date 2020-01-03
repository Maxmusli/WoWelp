import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_action";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: "login",
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
