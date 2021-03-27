const addToCart = (state,newItem)=>{
    const alreadyExistingItem = state.items.filter(item=>item.id===newItem.id)[0];
    if(alreadyExistingItem){
        const newItemsList =  state.items.map(item=>{
            if(item.id===alreadyExistingItem.id)
                item.quantity++;
            return item;
        })
        return newItemsList;
    }
    newItem.quantity = 1;
    return [...state.items,newItem];
}

export const removeItem = (items,id)=>{
    return items.filter((item)=>item.id !== id)
}

export const reduceItemCount = (items,id)=>{
     let modifiedItems =  items.map((item)=>{
        if(item.id === id)
            if(item.quantity===1)
                return null;
            else
                {
                    item.quantity = item.quantity-1;
                    return item;
                }
        else
            return item;
    })
    return modifiedItems.filter(item=>item!=null);
}


export default addToCart;