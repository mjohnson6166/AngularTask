import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { Store } from '@ngrx/store';

import { UserCardComponent } from '../user-card/user-card.component';
import { selectUserFavorites, selectUsers } from '../state/users.selectors';
import { loadUsers } from '../state/users.actions';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'crx-user-list',
    standalone: true,
    imports: [CommonModule, UserCardComponent, MatGridListModule, MatSlideToggleModule],
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {

    private store = inject(Store);

    users$ = this.store.select(selectUsers);

    ngOnInit () {

        this.store.dispatch(loadUsers());

    }

    showFavoritesUserList ($event: MatSlideToggleChange) {

        if ($event.checked) {

            this.users$ = this.store.select(selectUserFavorites);

        } else {

            this.users$ = this.store.select(selectUsers);

        }

    }

}
