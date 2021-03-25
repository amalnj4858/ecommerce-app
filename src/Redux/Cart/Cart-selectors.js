import { createSelector } from 'reselect';

const cartSelector = (state)=> (state.cart);

export const cartItemsSelector = createSelector(
    cartSelector,
    cart=>cart.items
)

export const hiddenValueSelector = createSelector(
    cartSelector,
    cart => cart.hidden 
)

export const itemCountSelector = createSelector(
    cartItemsSelector,
    items=>items.reduce((accumulator,item)=>{return accumulator + item.quantity},0)
)

export const totalPriceSelector = createSelector(
    cartItemsSelector,
    items=>items.reduce((accumulator,item)=>{return accumulator + item.price},0)
)