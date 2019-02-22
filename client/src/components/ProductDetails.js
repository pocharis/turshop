import React, { Component } from 'react';
import {ProductConsumer} from '../dataholder';
import {Link} from 'react-router-dom';
import ButtonContainer, {ButtonConstainer} from './Button';


class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.routeParam = props.match.params.id;
      }

    render() {
        return (
            <div>
               <ProductConsumer>
                   {value => {
                    const productdetails = {...value.products[this.routeParam - 1]}
                    //console.log(productdetails.name)

                    return(
                        <div className="constainer py-5">
                            {/* product title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h2>
                                        Product Description
                                    </h2>

                                </div>
                            </div>
                            {/* end product details*/}

                            {/* product details*/}
                            <div className="row">
                            
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={"/images/" + productdetails.image} className = "img-fluid" alt="product"/>
                                </div>
                                {/* product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>{productdetails.name}</h2>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price: <span>$</span>{productdetails.price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-sweight-bold mt-3 mb-0">
                                        Product Details for {productdetails.name}
                                    </p>
                                    <p className="text-muted lead">{productdetails.description}</p>
                                    <div>
                                        <Link to="">
                                        <ButtonContainer>
                                            Back to Products
                                        </ButtonContainer>
                                        </Link>

                                        <ButtonContainer>
                                            {}
                                        </ButtonContainer>
                                    </div>
                                </div>

                            </div>
                            {/*end  product details*/}
                        
                        </div>
                    )
                    }}

               </ProductConsumer>
            </div>
        );
    }
}

export default ProductDetails;