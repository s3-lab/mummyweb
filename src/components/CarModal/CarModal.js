import React, {useEffect, useState} from 'react';
import Mummyplanter from "../../assets/product/mummyplanter.jpg";

import './CarModal.scss'
import './ProductInCar.scss'

export default function CarModal({carDisplay, productsCar, counter, data, getProductsFromLocalStorage}){

    const [noRepeatProduct,setNoRepeatProduct] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

 const countDuplicatesItemArray = (value, array) => {
    let count = 0;
    array.forEach(arrayValue => {
      if (arrayValue === value) {
        count++;
      }
    });
    return count;
  };

    useEffect(()=>{
       const singles = Array.from(new Set(productsCar));
       setNoRepeatProduct(singles)
    },[productsCar, counter])
   
 


    useEffect(()=>{
        const productData = [];
        let totalPrice = 0;
        noRepeatProduct.forEach((product)=>{
            const quantity = countDuplicatesItemArray(product, productsCar)
            const info = {
                id: product,
                quantity: quantity
            }
            productData.push(info)
        })
        if(!data.loading){
        data.data.body.forEach((product)=>{
            productData.forEach((item)=>{
                if(product._id == item.id){
                    const totalValue = product.price * item.quantity;
                    totalPrice = totalPrice + totalValue;
                }
            })
        })
        setCartTotalPrice(totalPrice) 

    }

    },[productsCar,data, noRepeatProduct])

const display = carDisplay ? 'open' : 'close';
    return(
        <div className={`car-container car-container__${display}`} >
            <div className='car-container__header'>
                 <p>{ productsCar.length == 0 ? "CESTA VACIA" : "RESUMEN DEL PEDIDO"}</p>
            </div>
            <div className='car-container__list'>
                {
                        noRepeatProduct.map((id)=>{
                                return <ProductInCar id={id} productsCar={productsCar} data={data} getProductsFromLocalStorage={getProductsFromLocalStorage} countDuplicatesItemArray={countDuplicatesItemArray}/>
                        })
                }

            </div>
            <div className='car-container__total'>
                
                <p>TOTAL</p>
                <p>ars {cartTotalPrice}</p>
            </div>
            <div className='car-container__button'>
                <button>VER CESTA</button>
            </div>
        </div>
    )
}

const ProductInCar = ({id, productsCar, data, getProductsFromLocalStorage, countDuplicatesItemArray})=>{


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
                                        <span>{quantity}</span>
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
                        : null
                    }
                </>
                    
            )
   
}