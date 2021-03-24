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

export default addToCart;