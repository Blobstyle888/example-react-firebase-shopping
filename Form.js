import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { reduxForm, Field } from 'redux-form'

import DropzoneUploader from '../../../components/DropzoneUploader'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageUrl: props.coverImage
    }
    console.log('coverImage >> ', props.coverImage)
  }

  handleUploadFile = value => {
    this.setState({
      imageUrl: value.imageUrl
    })
  }

  render() {
    const { imageUrl } = this.state
    const { handleSubmit } = this.props
    return (
      <div className="container">
        <div className="columns is-centered">
          <form className="column is-8" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Product Name</label>
              <div className="control">
                <Field
                  component="input"
                  name="name"
                  type="text"
                  className="input"
                  placeholder="e.g. Product Name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Image: </label>
              <Field
                name="coverImage"
                component={DropzoneUploader}
                onChange={this.handleUploadFile}
                handleProgress={progress => {
                  console.log('progress >> ', progress)
                }}
              />

              {imageUrl ? (
                <img
                  src={imageUrl}
                  className="preview-image-box"
                  alt="Preview Cover"
                />
              ) : null}
            </div>

            <div className="field">
              <label className="label">Price</label>
              <div className="control">
                <Field
                  component="input"
                  name="price"
                  className="input"
                  type="number"
                  placeholder="e.g. 2000"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Quantity</label>
              <div className="control">
                <Field
                  component="input"
                  name="quantity"
                  className="input"
                  type="number"
                  placeholder="e.g. 50"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select">
                  <Field component="select" name="category">
                    <option value="t-shirt">T-Shirt</option>
                    <option value="dress">Dress</option>
                  </Field>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <Field
                  component="textarea"
                  name="description"
                  className="textarea"
                  placeholder="e.g. Your product description"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">SKU</label>
              <div className="control">
                <Field
                  component="input"
                  name="sku"
                  className="input"
                  type="text"
                  placeholder="e.g. PRODUCT_NAME_01"
                />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit">
                  Submit
                </button>
              </div>
              <div className="control">
                <Link to="/products" className="button is-text">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'product-form',
  enableReinitialize: true
})(Form)
