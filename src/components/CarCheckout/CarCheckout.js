import React, {useEffect, useState} from 'react';
import ProductAdd from '../ProductAdd'
import './CarCheckout.scss'
export default function CarModal({ productsCar, counter, data, getProductsFromLocalStorage}){

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

    return(
        <>
        <div className={`car-container_checkout`} >
            <div className='car-container_checkout__header'>
                 <p>{ productsCar.length == 0 ? "CESTA VACIA" : "RESUMEN DEL PEDIDO"}</p>
            </div>
            <div className='car-container_checkout__list'>
                {
                        noRepeatProduct.map((id)=>{
                                return <ProductAdd id={id} productsCar={productsCar} data={data} getProductsFromLocalStorage={getProductsFromLocalStorage} countDuplicatesItemArray={countDuplicatesItemArray}/>
                        })
                }
            </div>
        </div>
        <div className='car-container_checkout__total'>
                
                <p>TOTAL</p>
                <p>ars {cartTotalPrice}</p>
            </div>
        </>
    )
}
