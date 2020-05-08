import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uploadFile } from '../../store/actions/fileActions'
import { Redirect } from 'react-router-dom'
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";

class UploadFile extends Component {
  state = {
    title: '',
    content: '',
    filenames: [],
    downloadURLs: [],
    isUploading: false,
    uploadProgress: 0

  }
  handleUploadStart = () =>
        this.setState({
          isUploading: true,
          uploadProgress: 0
        });
    
      handleProgress = progress =>
        this.setState({
          uploadProgress: progress
        });
    
      handleUploadError = error => {
        this.setState({
          isUploading: false
          // Todo: handle error
        });
        console.error(error);
      };
    
      handleUploadSuccess = async filename => {
        const downloadURL = await firebase
          .storage()
          .ref("files")
          .child(filename)
          .getDownloadURL();
    
        this.setState(oldState => ({
          filenames: [...oldState.filenames, filename],
          downloadURLs: [...oldState.downloadURLs, downloadURL],
          uploadProgress: 100,
          isUploading: false
        }));
      };
    
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.uploadFile(this.state);
    this.props.history.push('/files');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a New File</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">File Name</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">File description</label>
          </div>
          
          <FileUploader
                       
                       
                       storageRef={firebase.storage().ref('files')}
                       onUploadStart={this.handleUploadStart}
                       onUploadError={this.handleUploadError}
                       onUploadSuccess={this.handleUploadSuccess}
                       onProgress={this.handleProgress}
                       
                  />
                <div className="input-field">
            <button className="btn pink lighten-1">Add</button>
          </div>
               
            <p>Progress: {this.state.uploadProgress}</p>
    
            <p>Filenames: {this.state.filenames.join(", ")}</p>
    
            <div>
              {this.state.downloadURLs.map((downloadURL, i) => {
                return <p>{downloadURL}</p> ;
              })}
            </div>
           
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadFile: (file) => dispatch(uploadFile(file))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadFile) 


