import {createSelector} from 'reselect';

const user = state => state.user;

export const currentUserSelector = createSelector(
    user,
    user=> user.currentUser
)