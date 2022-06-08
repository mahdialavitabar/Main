import React from 'react'
import ProductList from './components/ProductList/ProductList'
import Main from './components/Main/Main'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        console.log('App.js constructor')
    }
    state= {
        products: [
            {id:1,title: 'Book1', price: 10},
            {id:2,title: 'Book2', price: 20},
            {id:3,title: 'Book3', price: 30},
        ],
        showProducts: false,
        showMain: true
    }

    componentDidMount() {
        console.log('App.js componentDidMount')
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log('App.js shouldComponentUpdate')
        return true
    }
    componentDidUpdate() {
        console.log('App.js componentDidUpdate')
    }

    changeeTitleHandler = (event, id) => {
       const productIndex = this.state.products.findIndex((item) => {
           return item.id === id
       })
       const product = {
           ...this.state.products[productIndex]
       }
       product.title = event.target.value

       const products= [...this.state.products]
       products[productIndex]= product

       this.setState({products:products})
    }

    toggleProductHandler = () => {
        const show = this.state.showProducts
        this.setState({showProducts:!show})
    }
    deleteProductHandler = (productIndex) => {
        const products = [...this.state.products]
        products.splice(productIndex,1)
        this.setState({products: products})
    }
    render() {
        console.log('App.js render')
        let products = null
        if (this.state.showProducts) {
            products = (
                <div>
                <ProductList
                products = {this.state.products}
                click= {this.deleteProductHandler}
                change= {this.changeeTitleHandler}
                />                
                </div> 
            )
        }
            return (
        <div className='center'>
            <button onClick={() => {this.setState ({showMain: false})} }>Remove Main</button>
            {this.state.showMain ?
         <Main 
         products={this.state.products}
          click={this.toggleProductHandler}
          />           :null } 
      {products}
        </div>
    )
    }
}



  export default App;