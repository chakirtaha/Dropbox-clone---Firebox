import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const NavBar = (props) => {

  const { auth, profile  } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
      <nav class="white" role="navigation">
            <div class="nav-wrapper container">
                 <a id="logo-container" href="/" class="brand-logo"><i className="material-icons medium " >whatshot</i>FireBox</a>
                     {links}
           </div>
      </nav>

    
  )
  }   



  const mapStateToProps = (state) => {
  
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
  
  export default connect(mapStateToProps)(NavBar)
