import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from './users.actions';

export const initialFavoriteState: number[] = [];

export const favoritesReducer = createReducer(
    initialFavoriteState,
    on(removeFavorite, (state, { userId }) =>
        state.filter((id) => id !== userId)),
    on(addFavorite, (state, { userId }) => {

        if (state.indexOf(userId) > -1) {

            return state;

        }

        return [...state, userId];

    })
);
