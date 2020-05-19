import React, { Component } from 'react'
import M from 'materialize-css'
import { connect } from 'react-redux'
import { uploadFile } from '../../store/actions/fileActions'
import { Redirect } from 'react-router-dom'
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import 'firebase/storage';




class UploadFile extends Component {
 
  state = {
    title: '',
    type: '',
    filename: '',
    downloadURL: '',
    isUploading: false,
    uploadProgress: 0,

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
          .ref('files')
          
          .child(filename)
          
          .getDownloadURL();
    
        this.setState(oldState => ({
          filename:  filename,
          downloadURL:  downloadURL,
          uploadProgress: 100,
          isUploading: false,
         
         
      
        }));
        
      };
      
    
      handleChange = (e) => {
         this.setState({
             [e.target.id]: e.target.value
      })
      }
  
  
      handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.uploadFile(this.state);
        this.props.history.push('files');
    
      }
    componentDidMount() {
    
         M.AutoInit();
    }
  



    
  
  render() {
    const { auth } = this.props;
    const prog =this.state.uploadProgress;
    const url=this.state.downloadURL;
    let button;
   
    
    
    if (prog===100 && url!=="") {
      
      button = 
      <div className="input-field" >
         <button class="waves-effect waves-light btn" >
                <i class=" material-icons right">cloud_upload</i>
                 Upload
        </button>
      </div>;
    }
   
        
    
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="container">
        
            <form className="white" onSubmit={this.handleSubmit}>
                 <h5 className="grey-text text-darken-3">Add a New File</h5>
                 <div className="input-field">
                      <input type="text" id='title' onChange={this.handleChange} />
                      <label htmlFor="title">File Name</label>
                 </div>

                 <div className="input-field col s12">
                    <select id="type" onChange={this.handleChange}>
                          <option value="" disabled selected>
                             Choose your file's type
                         </option>
                         <option value="video">Video</option>
                         <option value="document">Document</option>
                         <option value="music">Music</option>
                         <option value="photo">photo</option>
                    </select>
                 </div>

                 <FileUploader   
                       
                       storageRef={firebase.storage().ref("files")}
                       onUploadStart={this.handleUploadStart}
                       onUploadError={this.handleUploadError}
                       onUploadSuccess={this.handleUploadSuccess}
                       onProgress={this.handleProgress}
                       randomizeFilename={true}
                       
                  />
            
                  <div> {button}</div>
           
           
           
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


