import React from 'react'
import FileSummary from './FileSummary'
import { Link } from 'react-router-dom'

const FileList = ({files}) => {
  return (
    <div className="project-list section">
      { files && files.map(file => {
        return (
          <Link to={'/file/' + file.id} key={file.id}>
            <FileSummary file={file} />
          </Link>
        )
      })}  
    </div>
  )
}

export default FileList