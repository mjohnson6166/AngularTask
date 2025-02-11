import { createAction, props } from '@ngrx/store';
import { User } from '../user-list/user.model';

export const addFavorite = createAction(
    '[User] Add favorite user',
    props<{ userId: number }>()
);

export const removeFavorite = createAction(
    '[User] Remove favorite user',
    props<{ userId: number }>()
);

export const loadUsers = createAction('[User List Page] Load users');

export const loadUserSuccess = createAction('[User Page] Load user success',);

export const retrieveUsers = createAction(
    '[Users API] Retrieve users',
    props<{ users: User[] }>()
);
