import { Route } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const appRoutes: Route[] = [
    { path: '', component: UserListComponent, title: 'User list' },
    { path: 'user/:id', component: UserProfileComponent, title: 'User Profile' },
];
