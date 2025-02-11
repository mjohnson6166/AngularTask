import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { UserService } from '../user-list/user.service';
import { loadUsers, retrieveUsers } from './users.actions';

@Injectable()
export class UsersEffects {

    private actions$ = inject(Actions);

    constructor (private userService: UserService) {}

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUsers),
            switchMap(() =>
            // Call the getTodos method, convert it to an observable
                from(this.userService.getUsers()).pipe(
                    // Take the returned value and return a new success action containing the todos
                    map((users) => retrieveUsers({ users })),
                    // Or... if it errors return a new failure action containing the error
                    catchError(() => of())
                ))
        ));

}
