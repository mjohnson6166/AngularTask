import { createFeatureSelector, createSelector } from '@ngrx/store';

import { User } from '../user-list/user.model';

export const selectUsers = createFeatureSelector<User[]>('users');

export const selectFavorites
  = createFeatureSelector<number[]>('favorites');

export const selectUserFavorites = createSelector(
    selectUsers,
    selectFavorites,
    (users, favorites) => favorites?.map((id) => users?.find((user) => user.id === id) || {} as User)
);

export const selectUserById = (id: number) =>
    createSelector(selectUsers, (users) => users.find((user) => user.id === id));
