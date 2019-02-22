import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../dataholder';


class ProductList extends Component {
    

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="contianer">
                        <Title name="Our" title="Products"/>
                        <div className="row">
                            <ProductConsumer>
                                {val => {
                                    return val.products.map(product => {
                                        return <Product key={product.product_id} product={product}/>
                                    })
                                }}  
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}



export default ProductList;