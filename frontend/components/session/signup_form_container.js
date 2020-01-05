import { connect } from 'react-redux';
import { createNewUser, clearErrors, login } from '../../actions/session_action';
import { openModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  formType: 'signup',
  errors: errors.session
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(createNewUser(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);