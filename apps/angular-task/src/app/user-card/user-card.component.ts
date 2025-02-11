import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { User } from '../user-list/user.model';

@Component({
    selector: 'crx-user-card',
    standalone: true,
    imports: [CommonModule,
        RouterLink,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        FavoriteButtonComponent,],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
})
export class UserCardComponent {

    @Input() user: User = {} as User;

}
