import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import Paper from '@material-ui/core/Paper'
import { SIGNUP_PATH } from 'constants/paths'
import LoginForm from '../LoginForm'

const LoginPage = ({ loginWithCredentials, googleLogin, classes }) => (
  <div className={classes.root}>
    <Paper className={classes.panel}>
      <LoginForm loginWithCredentials={loginWithCredentials} />
    </Paper>
    <div className={classes.orLabel}>or</div>
    <div className={classes.providers}>
      <GoogleButton label="Login con Google" onClick={googleLogin} />
    </div>
    <div className={classes.signup}>
      <span className={classes.signupLabel}>Need an account?</span>
      <Link className={classes.signupLink} to={SIGNUP_PATH}>
        Sign Up
      </Link>
    </div>
  </div>
)

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  loginWithCredentials: PropTypes.func.isRequired, // from enhancer (withHandlers)
  googleLogin: PropTypes.func.isRequired // from enhancer (withHandlers)
}

export default LoginPage
