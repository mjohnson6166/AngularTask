import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCardComponent } from './user-card.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialUserState } from '../state/users.reducer';
import { provideRouter } from '@angular/router';

describe('UserCardComponent', () => {

    let component: UserCardComponent;
    let fixture: ComponentFixture<UserCardComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [UserCardComponent],
            providers: [
                provideMockStore({ initialState: initialUserState }),
                provideRouter([]),
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(UserCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
