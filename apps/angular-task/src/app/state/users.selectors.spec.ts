import { AppState } from './app.state';

import { selectUserById, selectUserFavorites, selectUsers } from './users.selectors';
import { mockUsers } from './users';

describe('Selectors', () => {

    const initialState: AppState = {
        users: mockUsers,
        favorites: [2]
    };

    it('should select the user list', () => {

        const result = selectUsers.projector(initialState.users);
        expect(result.length).toBe(2);
        expect(result[1].id).toEqual(2);

    });

    it('should select the favorites list', () => {

        const result = selectUsers.projector(initialState.favorites);
        expect(result.length).toBe(1);
        expect(result[0]).toEqual(2);

    });

    it('should select the user favorite list', () => {

        const result = selectUserFavorites.projector(
            initialState.users,
            initialState.favorites
        );
        expect(result.length).toEqual(1);
        expect(result[0].id).toEqual(2);

    });

    it('should select the user by id', () => {

        const result = selectUserById(2).projector(initialState.users);
        expect(result?.id).toEqual(2);
        expect(result?.name).toEqual('Ervin Howell');

    });

});
