import {createSelector} from 'reselect';

const shopSelector = state =>state.shop;

export const shopCollectionsSelector = createSelector(
    shopSelector,
    shop => shop.collection
)

export const shopCollectionCategorySelector = (categoryName) => createSelector(
    shopCollectionsSelector,
    categories=>categories.find(category=> category.title.toLowerCase()===categoryName)
)
