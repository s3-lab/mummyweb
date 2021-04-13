import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom'
import ProductAdd from '../ProductAdd'
import './CarModal.scss'
import './ProductInCar.scss'

function CarModal(props) {

    const {carDisplay, productsCar, counter, data, getProductsFromLocalStorage, location} = props;
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

    const emptyBag = productsCar.length == 0 ? 'empty' : ''

    return(
        <div className={`car-container car-container__${carDisplay ? 'open' : 'close'} ${emptyBag}`} >
            <div className='car-container__header'>
                 <p>{ productsCar.length == 0 ? "CESTA VACIA" : "RESUMEN DEL PEDIDO"}</p>
            </div>
            <div className='car-container__list'>
                {
                    noRepeatProduct.map((id)=>{
                        return <ProductAdd id={id} productsCar={productsCar} data={data} getProductsFromLocalStorage={getProductsFromLocalStorage} countDuplicatesItemArray={countDuplicatesItemArray}/>
                    })
                }
            </div>
            {productsCar.length != 0 &&
                <>
                    <div className='car-container__total'>
                        <p>TOTAL</p>
                        <p>ars {cartTotalPrice}</p>
                    </div>
                    <div className='car-container__button'>
                            <Link to='/checkout'>
                                <button>
                                    VER CESTA
                                </button>
                            </Link>
                    </div>
                </>}
        </div>
    )
}

export default withRouter(CarModal)