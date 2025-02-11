import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { UserService } from './user.service';
import { User } from './user.model';

describe('UserService', () => {

    let service: UserService;
    let http: HttpTestingController;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                UserService,
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        });
        service = TestBed.inject(UserService);
        http = TestBed.inject(HttpTestingController);

    });

    it('should be created', () => {

        expect(service).toBeTruthy();

    });

    it('should return expected users', () => {

        const expectedUsers: User[] = [
            {
                id: 1,
                name: 'Test User 1',
                username: '',
                email: '',
                address: {
                    street: '',
                    suite: '',
                    city: '',
                    zipcode: '',
                    geo: {
                        lat: '',
                        lng: '',
                    },
                },
                phone: '',
                website: '',
                company: {
                    name: '',
                    catchPhrase: '',
                    bs: '',
                },
            },
            {
                id: 2,
                name: 'Test User 2',
                username: '',
                email: '',
                address: {
                    street: '',
                    suite: '',
                    city: '',
                    zipcode: '',
                    geo: {
                        lat: '',
                        lng: '',
                    },
                },
                phone: '',
                website: '',
                company: {
                    name: '',
                    catchPhrase: '',
                    bs: '',
                },
            }
        ];

        service.getUsers().subscribe((users)  => {

            expect(users.length).toBe(2);
            expect(users).toEqual(expectedUsers);

        });

        const req = http.expectOne(`${service.apiUrl}/users`);
        expect(req.request.method).toBe('GET');

    });

});
