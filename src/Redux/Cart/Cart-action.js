export const toggleDropDown = ()=>({
    type : 'TOGGLE_DROP_DOWN'
})

export const addItem = item =>({
    type : 'ADD_ITEM',
    payload : item
})

export const removeItem = (id)=>({
    type : 'REMOVE_ITEM',
    payload : id
})

export const reduceItemCount = (id)=>({
    type:'REDUCE_ITEM_COUNT',
    payload:id
})