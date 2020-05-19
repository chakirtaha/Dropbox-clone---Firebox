import React, { Component } from 'react'
import { connect } from 'react-redux'
import { googleSignUp } from '../../store/actions/googleAuthActions'
import firebase from '../../config/fbConfig'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class GoogleSignUp extends Component {


    state = {
        firstName: ''
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.setState({
                    firstName: user.displayName
                })
                this.props.googleSignUp(this.state);
            }

        })
    }


    render() {
        const { auth, authError } = this.props;
        return (
            <StyledFirebaseAuth
                uiConfig={{
                    signInFlow: "popup",
                    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]

                }}
                firebaseAuth={firebase.auth()}
             />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        googleSignUp: (user) => dispatch(googleSignUp(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleSignUp)
