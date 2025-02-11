import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { FavoriteButtonComponent } from './favorite-button.component';
import { initialFavoriteState } from '../state/favorites.reducer';

describe('FavoriteButtonComponent', () => {

    let component: FavoriteButtonComponent;
    let fixture: ComponentFixture<FavoriteButtonComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [FavoriteButtonComponent],
            providers: [
                provideMockStore({ initialState: initialFavoriteState }),
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(FavoriteButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
