
export const countDuplicatesItemArray = (value, array) => {
    let count = 0;
    array.forEach(arrayValue => {
      if (arrayValue === value) {
        count++;
      }
    });
    return count;
  };

// export const increase = (id)=>{
//     const products = productsCar;
//     products.push(id);
//     localStorage.setItem('PRODUCTS', JSON.stringify(products))
//     getProductsFromLocalStorage()
// }

// export const decrease = (id)=>{
//     const index = productsCar.indexOf(id)
//     index > -1 && productsCar.splice(index,1)
//     localStorage.setItem('PRODUCTS', JSON.stringify(productsCar))
//     getProductsFromLocalStorage()

// }