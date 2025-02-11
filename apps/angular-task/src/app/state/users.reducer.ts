import { createReducer, on } from '@ngrx/store';

import { User } from '../user-list/user.model';
import { retrieveUsers } from './users.actions';

export const initialUserState: User[] = [];

export const usersReducer = createReducer(
    initialUserState,
    on(retrieveUsers, (state, { users }) => [...users]),
);
