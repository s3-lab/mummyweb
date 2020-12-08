import * as actions from '../actions/productAction'

export const initialState = {
    products: [],
    loading: true,
    hasErros: false,
}

export default function productReducer(state=initialState, action){

    switch(action.type){
        case actions.GET_PRODUCTS:
            return {...state}
        case actions.GET_PRODUCTS_SUCCESS:
            return {...state, loading:false, products: action.payload}
        case actions.GET_PRODUCTS_FAILURE:
            return {...state, loading:false, hasErros:true}
        default: return state
    }
}