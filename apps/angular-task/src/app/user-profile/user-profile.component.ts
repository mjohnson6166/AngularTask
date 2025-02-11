import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectUserById } from '../state/users.selectors';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { loadUserSuccess } from '../state/users.actions';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'crx-user-profile',
    standalone: true,
    imports: [CommonModule, FavoriteButtonComponent, MatDividerModule],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {

    user$;
    userId;

    constructor (private route: ActivatedRoute,  private store: Store) {

        this.userId = this.route.snapshot.params['id'];

        this.user$ = this.store.select(selectUserById(Number(this.userId)));

    }

    ngOnInit () {

        this.store.dispatch(loadUserSuccess());

    }

}
