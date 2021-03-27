import { reduceItemCount } from './Cart-utils.js';
import addToCart from './Cart-utils.js';
import {removeItem} from './Cart-utils.js';

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

        case 'REMOVE_ITEM' : return{
            ...state,
            items : removeItem(state.items,action.payload)
        }

        case 'REDUCE_ITEM_COUNT' : return{
            ...state,
            items : reduceItemCount(state.items,action.payload)
        }
        default :
        return state;
    }
}

export default cartReducer;