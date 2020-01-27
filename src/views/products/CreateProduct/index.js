import React, { Fragment } from 'react'

import { createProduct } from '../../../actions/products'

import BaseHero from '../../../components/BaseHero'

import Form from '../components/Form'

const handleCreateProduct = (values, dispatch) => {
  const payload = { ...values, coverImage: '' }

  dispatch(createProduct(payload))
}
const CreateProduct = () => {
  return (
    <Fragment>
      <BaseHero />
      <Form onSubmit={handleCreateProduct} />
    </Fragment>
  )
}

export default CreateProduct
