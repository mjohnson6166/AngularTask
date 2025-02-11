import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { UserListComponent } from './user-list.component';
import { initialUserState } from '../state/users.reducer';

describe('UserListComponent', () => {

    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [UserListComponent],
            providers: [
                provideMockStore({ initialState: initialUserState }),
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    afterEach(() => {

        TestBed.inject(MockStore)?.resetSelectors();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
