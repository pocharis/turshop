import React, { Component } from 'react';
import axios from 'axios';
const ProductContext = React.createContext();


class ProductProvider extends Component {
state = {
    products:[],
};

    handleDetail =() =>{
        console.log('handle detail bar');
    }

    addCart =() =>{
        console.log('handle cart bar');
    }


    componentDidMount() {
        axios.get('http://localhost:8081/api/products')
        .then(response => {
            this.setState({ products: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addCart:this.addCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};