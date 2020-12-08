import React from 'react';
import CarCheckout from '../components/CarCheckout'
import { Formik} from 'formik';
import './checkout.scss'

export default function Checkout({ productsCar, getProductsFromLocalStorage, data}){
    

    return(
        <div className="checkout">
            
            <div className="checkout-form">
            
                    <Formik
                    initialValues={{ email: '', name: '', lastName: '', zipCode: '', address: '', prov: '', telephone: '', city: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} className="form">
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
                                <div className="form__field">

                                <label>Email</label>
                                <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                </div>

                                <div className="form__field">

                                <label>Codigo Postal</label>
                                <input
                                type="zipCode"
                                name="zipCode"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.zipCode}
                                />
                                </div>

                                <div className="form__field">

                                <label>Provincia</label>

                                <input
                                    type="prov"
                                    name="prov"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.prov}
                                />
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

                                <div className="form__field">

                                <label>Direccion</label>
                            
                            <input
                                type="address"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                                </div>

                                <div className="form__field">

                                <label>Telefono</label>

                            <input
                                type="telephone"
                                name="telephone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.telephone}
                            />
                                </div>

                                <div className="form__field">

                                <label>Ciudad</label>
                            <input
                                type="city"
                                name="city"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                            />
                                </div>

                            
                        
                            </div>
                        
                        
                        {/* <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button> */}
                        </form>
                    )}
                    </Formik>
   

            </div>
            <div className="checkout-container">        
                  <div className="checkout-container__item"><CarCheckout productsCar={productsCar} data={data}/></div>
                    
                
            </div>
        </div>
    )
}