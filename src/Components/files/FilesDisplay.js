import React, { Component } from 'react'
import FileList from '../files/FileList'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class FilesDisplay extends Component {
  render() {
    const { files, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        <div className="row">
          <div >
          
            <FileList files={files} />
          </div>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    files: state.firestore.ordered.files,
    auth: state.firebase.auth,
    uid:state.firebase.auth.uid
  }
}

export default compose(
  connect(mapStateToProps),
  
    firestoreConnect((mapStateToProps) => [{
      collection: 'files',
      where: [
        ['authorId', '==', mapStateToProps.uid]
      ],
    }])
)(FilesDisplay)