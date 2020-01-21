import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { lifecycle, compose } from 'recompose'

import { findAll } from '../../../actions/products'
import ProductItem from '../components/ProductItem'

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Product Management</h1>
            <h2 className="subtitle">Hello</h2>
          </div>
        </div>
      </section>
      <section className="section product-data">
        <div className="container">
          <h2 className="title">Product List</h2>

          <div className="columns">
            <div className="column is-12">
              <Link to="/products/new" className="button is-info">
                Create
              </Link>
            </div>
          </div>

          {products &&
            products.map(product => {
              return <ProductItem product={product} />
            })}
        </div>
      </section>
    </div>
  )
}
const withLifecycle = lifecycle({
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(findAll())
  }
})

const mapStateToProps = state => ({
  isFetching: state.products.list.isFetching,
  products: state.products.list.data
})

export default compose(connect(mapStateToProps), withLifecycle)(ProductList)
