import { User } from '../user-list/user.model';

export interface AppState {
    users: User[];
    favorites: number[]
}
