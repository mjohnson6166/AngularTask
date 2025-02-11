import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    apiUrl = 'https://jsonplaceholder.typicode.com';

    constructor (private http: HttpClient) { }

    getUsers (): Observable<User[]> {

        return this.http
        .get<User[]>(`${this.apiUrl}/users`)
        .pipe(map((users) => users ?? []));

    }

}
