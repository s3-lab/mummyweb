import React, {useEffect} from 'react';
import CarCheckout from '../components/CarCheckout'
import { Formik, withFormik} from 'formik';
import * as Yup from 'yup';

import './checkout.scss'
 
function Checkout(props){
    
    const { productsCar, getProductsFromLocalStorage, data,handleSubmit,handleBlur,handleChange,errors,values,touched, setValues,isSubmitting} = props;
    console.log(props)


    const hasError = touched[values] && errors[values];

    return(
        <div className="checkout">
            <div className="checkout-form">
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <div className="form__left">
                            <div className="form__field">
                                <label>Nombre</label>
                                <input
                                type="name"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                />
                            </div>

                            <div className={`form__field ${errors.email && touched.email   ? "has-error" : ""}`}>
                                <label>Email</label>
                                <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                />
                                {errors.email && touched.email && <p>{errors.email}</p>}
                            </div>

                            <div className={`form__field ${errors.zipCode && touched.zipCode   ? "has-error" : ""}`}>
                                <label>Codigo Postal</label>
                                <input
                                type="zipCode"
                                name="zipCode"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.zipCode}
                                />
                                {errors.zipCode && touched.zipCode && <p>{errors.zipCode}</p>}
                            </div>

                            <div className={`form__field ${errors.prov && touched.prov   ? "has-error" : ""}`}>
                                <label>Provincia</label>
                                <input
                                    type="prov"
                                    name="prov"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.prov}
                                />
                                {errors.zipCode && touched.prov && <p>{errors.prov}</p>}
                            </div>
                        </div>
                        <div className="form__rigth">
                            <div className="form__field">
                                <label>Apellidos</label>
                                <input
                                    type="lastName"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                />
                            </div>
                            <div className={`form__field ${errors.address && touched.address   ? "has-error" : ""}`}>
                                <label>Direccion</label>
                                <input
                                    type="address"
                                    name="address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.address}
                                />
                                {errors.address && touched.address && <p>{errors.address}</p>}
                            </div>

                            <div className={`form__field ${errors.telephone && touched.telephone   ? "has-error" : ""}`}>
                                <label>Telefono</label>
                                <input
                                    type="telephone"
                                    name="telephone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.telephone}
                                />
                                {errors.telephone && touched.telephone && <p>{errors.telephone}</p>}
                            </div>

                            <div className={`form__field ${errors.city && touched.city   ? "has-error" : ""}`}>
                                <label>Ciudad</label>
                                <input
                                    type="city"
                                    name="city"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.city}
                                />
                                {errors.city && touched.city && <p>{errors.city}</p>}
                            </div>
                        </div>
                    </div>
                    <button type="submit" disabled={isSubmitting}>CONTINUAR</button>
                </form>
            </div>
            <div className="checkout-container">        
                  <div className="checkout-container__item"><CarCheckout productsCar={productsCar} data={data}/></div>
            </div>
        </div>
    )
}

export default  withFormik({
    mapPropsToValues: () => ({ email: '', name: '', lastName: '', zipCode: '', address: '', prov: '', telephone: '', city: '' }),
    // Custom sync validation
    validationSchema: () =>
    Yup.object().shape({
        email: Yup.string().email('El email es invalido').required('Ingresa un email'),
        telephone: Yup.string().required('Ingresa un telefono de contacto'),
        address: Yup.string().required('Ingresa una direccion'),
        zipCode: Yup.string().required('Ingresa el codigo postal'),
        city: Yup.string().required('Ingresa una ciudad'),
        prov: Yup.string().required('Ingresa una provincia'),
    }),
  
    handleSubmit: (values, { setSubmitting, setValues }) => {
        setValues({...values})
    console.log(values)

      setTimeout(() => {

        alert(JSON.stringify(values, null, 200));
        setSubmitting(false);
      }, 100);
    },
  
  })(Checkout);