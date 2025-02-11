import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';

import { selectUserFavorites } from '../state/users.selectors';
import { addFavorite, removeFavorite } from '../state/users.actions';

@Component({
    selector: 'crx-favorite-button',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule],
    templateUrl: './favorite-button.component.html',
    styleUrl: './favorite-button.component.scss',
})
export class FavoriteButtonComponent implements OnInit {

    @Input() id = -1;

    private store = inject(Store);
    favorites$ = this.store.select(selectUserFavorites);
    favorite = false;

    ngOnInit () {

        this.favorites$.subscribe((favorites) => {

            this.favorite = !!favorites?.find((f) => f.id === this.id);

        });

    }

    clickFavorite () {

        if (this.favorite) {

            this.removeFavorite();

        } else {

            this.addFavorite();

        }

    }

    addFavorite () {

        this.store.dispatch(addFavorite({ userId: this.id }));

    }

    removeFavorite () {

        this.store.dispatch(removeFavorite({ userId: this.id }));

    }

}
