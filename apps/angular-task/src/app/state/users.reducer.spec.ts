import * as fromReducer from './users.reducer';
import { User } from '../user-list/user.model';
import { retrieveUsers } from './users.actions';
import { mockUser } from './users';

describe('Users reducers', () => {

    describe('unknown action', () => {

        it('should return the default state', () => {

            const { initialUserState } = fromReducer;
            const action = {
                type: 'Unknown',
            };
            const state = fromReducer.usersReducer(initialUserState, action);

            expect(state).toBe(initialUserState);

        });

    });

    describe('retrieveUsers action', () => {

        it('should retrieve all users and update the state in an immutable way', () => {

            const { initialUserState } = fromReducer;
            const newState: User[] = [
                mockUser,
            ];
            const action = retrieveUsers({ users: newState });
            const state = fromReducer.usersReducer(initialUserState, action);

            expect(state).toEqual(newState);
            expect(state).not.toBe(initialUserState);

        });

    });

});
