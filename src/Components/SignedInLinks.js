/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'
import React , { Component} from 'react'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css'
import pic1 from './pic6.jpg'



class SignedInLinks extends Component   {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
  return (
    <div>
      <ul className="right">
       
        <li><NavLink to='/files'>My Files</NavLink></li>
        <li><NavLink to='/upload'>Upload File</NavLink></li>
        <li><NavLink to='#!' className="btn btn-floating waves-light teal lighten-1 " > {this.props.profile.initials}</NavLink></li>
        <li>
        
              <ul id="slide-out" class="sidenav ">
              <li>
                 <div class="user-view">
                        <div class="background">
                               <img src={pic1}/>
                        </div>
                        <a class="btn-floating halfway-fab waves-effect waves-light blue btn tooltipped"data-position="bottom" data-tooltip="Add a new profile picture" ><i class="material-icons">add_a_photo</i></a>
                        <a href="#!"><img class="circle" src={this.props.profile.photoURL} /></a>
                        
                        
                        <a href="#name"><span class="white-text name">{this.props.profile.firstName + ' '+ this.props.profile.lastName}</span></a>
                        <a href="#email"><span class="white-text email">{this.props.profile.email}</span></a>
                </div>
                
                </li>
                   <li><a href="#!"><i class="material-icons ">create</i>Edit Profile</a></li>
                   <li><a onClick={this.props.signOut} href="/"><i class="material-icons ">exit_to_app</i>Log Out</a></li>
                   <li><div class="divider"></div></li>

                   <li><a class="waves-effect" href="#!"><i class="material-icons ">monetization_on</i>FireBox premium services</a></li>
                   <li><a class="waves-effect"><i class="material-icons ">feedback</i>Feedback</a></li>
                   <li><a class="waves-effect" href="#!"><i class="material-icons ">help</i>Help</a></li>
             </ul>
             <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons ">menu</i></a>
       
       </li>

       
        
       
      </ul>
    </div>
  )
}
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)