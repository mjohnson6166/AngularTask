import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';

import { UsersEffects } from './users.effects';
import { UserService } from '../user-list/user.service';
import { mockUser } from './users';

const mockUserService = {
    getUsers: jest.fn()
};

describe('Users effects', () => {

    let effects: UsersEffects;
    let actions$ = new Observable<Action>();

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                UsersEffects,
                provideMockActions(() => actions$),
                {
                    provide: UserService, useValue: mockUserService,
                },
            ]
        });
        effects = TestBed.inject(UsersEffects);

    });

    describe('loadUsers effect', () => {

        it('should dispatch retrieveUsers with users', () => {

            actions$ = of({ type: '[User List Page] Load users' });
            const mockUsers = [mockUser];

            mockUserService.getUsers.mockReturnValue(of(mockUsers));
            effects.loadUsers$.subscribe((action) => {

                expect(action).toEqual({
                    type: '[Users API] Retrieve users',
                    users: mockUsers
                });

            });

        });

    });

});
