import addToCart from './Cart-utils.js';

const INITIAL_STATE = {
    hidden : true,
    items : []
}

const cartReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'TOGGLE_DROP_DOWN' : return{
            ...state,
            hidden : !state.hidden
        };
        
        case 'ADD_ITEM' :return{ 
            ...state,
            items:addToCart(state,action.payload)
        }

        default :
        return state;
    }
}

export default cartReducer;