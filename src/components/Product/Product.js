import React, {Component} from 'react'
import Container from '../../hoc/Container'
import './Product.css'

class Product extends Component {
render() {
    console.log('Product')
    return (
        <Container>
        <p key="1" onClick={this.props.click}>Product Name: {this.props.title}</p>
        <p key="2">Product Price: {this.props.price}</p>
        <p key="3">{this.props.children}</p>
        <input 
        key="4"
        type="text" 
        onChange={this.props.change} 
        value={this.props.title}
        />
        </Container>
            )   
}
}

export default Product