import React, {Component} from 'react'
import Product from '../Product/Product'

class ProductList extends Component {
   shouldComponentUpdate(nextProps, nextState) {
      console.log('Productlist shouldComponentUpdate')
      return true
   }
   getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('Productlist getSnapshotBeforeUpdate')
      return null
   }
   componentDidUpdate() {
      console.log('Productlist componentDidUpdate')

   }
   componentWillUnmount() {
      console.log('Productlist componentWillUnmount')

   }
      render() {
         console.log('ProductList')
         return this.props.products.map((item,index) => {
            return (
               <Product
         click={() => this.props.click(index)} 
         title={item.title}  
         price={item.price}
         key={item.id} 
         change={(event) => this.props.change(event, item.id)} 
         /> 
            ) 
         })
      }
   }

export default ProductList