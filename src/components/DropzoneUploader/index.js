import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import firebase from '../../firebase'
// import { uploadFile } from '../../actions/upload'

const { storage } = firebase
const storageRef = storage.ref()

class DropzoneUploader extends Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
    const file = acceptedFiles[0]
    // implement here
    var uploadTask = storageRef.child(`/products/${file.name}`).put(file)
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        this.props.handleProgress(progress)
      },
      error => {
        console.log('error > ', error)
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          this.props.input.onChange({
            imageUrl: url
          })
        })
      }
    )
    console.log('file > ', file)
  }

  render() {
    return (
      <Dropzone
        className="input-dropzone dropzone"
        onDrop={files => this.onDrop(files)}
        accept="image/png,image/jpeg"
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Add Image</p>
          </div>
        )}
      </Dropzone>
    )
  }
}

export default DropzoneUploader
