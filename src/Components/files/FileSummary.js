import React,{Component} from 'react'
import moment from 'moment'
import M from 'materialize-css'
import firebase from 'firebase'



 
class FileSummary extends Component{

     componentDidMount() {
    
           var elems = document.querySelectorAll('.fixed-action-btn');
           M.FloatingActionButton.init(elems, {
                                                direction: 'left',
                                                hoverEnabled: false
                                       });
          var elements = document.querySelectorAll('.tooltipped');
          M.Tooltip.init(elements, {});
      }

  render() {
    const { file } = this.props;


    const copyCodeToClipboard = () => {
      const el = file.downloadURL
      navigator.clipboard.writeText(el)
    }

    const OnDelete = () => {
      const db = firebase.firestore()
      let name=file.filename
      let  storageRef=firebase.storage().ref("files")
      storageRef.child(name).delete()
      db.collection("files")
        .doc(file.id)
        .delete()
        .then(function () { 
            console.log("Document successfully deleted!"); 
        }).catch(
                   function(error) { 
                      console.error("Error removing document: ", error); 
                });
 
       
    }

    
    let icon;
        if (file.type === "photo"){
               icon=<i class="material-icons circle blue">photo</i>
        }

        if (file.type === "video"){
               icon=<i class="material-icons circle red">play_arrow</i>
        }

       if (file.type === "document"){
              icon=<i class="material-icons circle ">description</i>
       }

      if (file.type === "music"){
             icon=<i class="material-icons circle green">audiotrack</i>
        }
    
  return (
    
       <ul className="collection">
      
             <li className="collection-item avatar">
                  {icon}
               <span className="title">{file.title}</span>
              <p>{file.filename} <br/>
                 Added {moment(file.createdAt.toDate()).calendar()}
             </p>
              <div className="secondary-content fixed-action-btn horizontal" 
              style={{"bottom": "45px; right: 24px;"}}>
                     <a href ='#!' class="btn-floating  red">
                     <i class="large material-icons">mode_edit</i>
                    </a>
                    <ul>

                        <li>
                           <a href ='#!'
                             class="btn-floating  btn tooltipped red" data-position="bottom" data-tooltip="Delete File"
                             onClick={() =>OnDelete()}>
                             <i class="material-icons">delete_forever</i>
                          </a>
                        </li>

                       <li>
                          <a href ='/upload' class="btn-floating yellow darken-1 btn tooltipped"data-position="bottom" data-tooltip="Add a new File">
                            <i class="material-icons">create_new_folder</i>
                         </a>
                       </li>

                       <li>
                          <a href ={file.downloadURL} class="btn-floating btn tooltipped green " data-position="bottom" data-tooltip="Download File">
                            <i class="material-icons">cloud_download</i>
                          </a>
                       </li>

                       <li>
                           <a href ='#!' onClick={() =>copyCodeToClipboard()} class="btn-floating  btn tooltipped blue" data-position="bottom" data-tooltip="Copy URL to clipboard">
                             <i class="material-icons">file_copy</i>
                           </a>
                      </li>
                </ul>
           </div>
       </li>
    </ul>
  )
}
}

export default FileSummary