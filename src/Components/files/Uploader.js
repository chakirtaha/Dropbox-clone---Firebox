import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

//import {useDropzone} from 'react-dropzone';
//import Dnp from './dnp.js'

class Uploader extends Component {
    state = {
        filenames: [],
        downloadURLs: [],
        isUploading: false,
        uploadProgress: 0
      };
      
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
    
      
      
      render() {
        return (
          <div>
            
                    
                  <FileUploader
                       
                       
                       storageRef={firebase.storage().ref('files')}
                       onUploadStart={this.handleUploadStart}
                       onUploadError={this.handleUploadError}
                       onUploadSuccess={this.handleUploadSuccess}
                       onProgress={this.handleProgress}
                       
                  />
               
            <p>Progress: {this.state.uploadProgress}</p>
    
            <p>Filenames: {this.state.filenames.join(", ")}</p>
    
            <div>
              {this.state.downloadURLs.map((downloadURL, i) => {
                return <p>{downloadURL}</p> ;
              })}
            </div>
           
                        
          </div>
        );
      }
    }
    
export default Uploader;