import React from "react";
import Mummyplanter from "../../assets/product/mummyplanter.jpg";


import "./Product.scss"



export default function Product({handleAdd, data}) {
    return (
      <>
      {
        !data.loading ?
        data.data.body.map((product,index)=>{
          return (
          <div key={index} className="card">
            <div className="card__img">
              <img src={Mummyplanter}/>
              <span onClick={()=>handleAdd(product._id)}>AÑADIR A CESTA</span>
            </div>
            <div className="card__info">
              <h3>{product.name}</h3>
              <p>$ {product.price}</p>
            </div>
        </div>)
        })
        :
        null
      }
      </>
    
    );
}