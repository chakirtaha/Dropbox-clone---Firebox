import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const FileDetails = (props) => {
  const { file, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (file) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{file.title}</span>
            <p>{file.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {file.authorFirstName} {file.authorLastName}</div>
            <div>URL:{file.downloadURLs} </div>
            <div>{moment(file.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading file...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const files = state.firestore.data.files;
  const file = files ? files[id] : null
  return {
    file: file,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'files'
  }])
)(FileDetails)