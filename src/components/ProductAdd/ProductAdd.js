import React from 'react';
import Mummyplanter from "../../assets/product/mummyplanter.jpg";
import {connect} from 'react-redux'
import {countDuplicatesItemArray} from '../../utils/functions'


import './ProductAdd.scss'

 function ProductAdd({id, productsCar, getProductsFromLocalStorage, data}){
    const increase = (id)=>{
        const products = productsCar;
        products.push(id);
        localStorage.setItem('PRODUCTS', JSON.stringify(products))
        getProductsFromLocalStorage()
    }
    
    const decrease = (id)=>{
        const index = productsCar.indexOf(id)
        index > -1 && productsCar.splice(index,1)
        localStorage.setItem('PRODUCTS', JSON.stringify(productsCar))
       getProductsFromLocalStorage()

    }
  
            return(
                <>
                    {   
                    !data.loading ?
                    data.data.body.map((product, index)=>{
                        if(product._id == id){
                            const quantity = countDuplicatesItemArray(product._id, productsCar)
                       return (
                        <div className="product-added">
                            <div className="product-added__img">
                                <img src={Mummyplanter} />
                            </div>
                            <div className="product-added__info">
                                <div className="product-added__info-title">
                                        <p>{product.name}</p>
                                </div>
                                <div className="product-added__info-desc">
                                    <span>{product.description}</span>
                                </div>
                                <div className="product-added__info-price">
                                    <div>
                                        <button onClick={()=>decrease(product._id)}>-</button>
                                        <span data-name="quantity">{quantity}</span>
                                        <button onClick={()=>increase(product._id)}>+</button>
                                    </div>
                                    <div>
                                        <span>
                                            ${product.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                       )
                            }
                        })
                        : <p>Hola</p>
                    }
                </>
                    
            )
}

const mapStateToProps = (state)=>({
    loading: state.products.loading,
    products: state.products.products,
    hasError: state.products.hasError,
    productsAdd : state.productsAdd

})

export default connect(mapStateToProps)(ProductAdd)