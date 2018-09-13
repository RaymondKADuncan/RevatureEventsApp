import { User } from './user.model';

export class Event {
    id: Number;
    name: String;
    description: String;
    users: User[];
    tags: String[];
    groups: String[];
    time: Date;
    location: String;
    pictureUrl: String
}
