import React from 'react'
import FileSummary from './FileSummary'



const FileList = ({ files }) => {
  return (
    <div className="project-list section">

      {files && files.map(file => {
        return (
          
             <FileSummary file={file} />
        )
      })}
      
    </div>
  )
}
export default FileList
