import { connect } from 'react-redux';
import { createNewUser, clearErrors, login } from '../../actions/session_action'
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  formType: 'signup',
  errors: errors.session
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(createNewUser(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);