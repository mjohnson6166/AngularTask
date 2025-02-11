import * as fromReducer from './favorites.reducer';
import { addFavorite, removeFavorite } from './users.actions';

describe('Favorites Reducer', () => {

    describe('unknown action', () => {

        it('should return the previous state', () => {

            const { initialFavoriteState } = fromReducer;
            const action = {
                type: 'Unknown',
            };
            const state = fromReducer.favoritesReducer(initialFavoriteState, action);

            expect(state).toBe(initialFavoriteState);

        });

    });

    describe('add action', () => {

        it('should add a userId from the user list and update the state in an immutable way', () => {

            const initialState: number[] = [1, 2];

            const action = addFavorite({ userId: 3 });
            const state = fromReducer.favoritesReducer(initialState, action);

            expect(state[2]).toBe(3);

        });

        it('should not add a userId to favorites when that userId is already in the list', () => {

            const initialState: number[] = [1, 2];

            const action = addFavorite({ userId: 2 });
            const state = fromReducer.favoritesReducer(initialState, action);

            expect(state[2]).toEqual(undefined);
            expect(state[1]).toBe(2);

        });

    });

    describe('remove action', () => {

        it('should remove the selected userId from the list and update the state in an immutable way', () => {

            const initialState: number[] = [1, 2];
            const action = removeFavorite({ userId: 2 });
            const state = fromReducer.favoritesReducer(initialState, action);

            expect(state[1]).toEqual(undefined);

        });

    });

});
