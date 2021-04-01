import { createSelector } from 'reselect';

const sectionsStoreSelector = (state) => state.sections;

export const sectionsSelector = createSelector(
    sectionsStoreSelector,
    items=> items.sections
)

