import {Component} from 'angular2/core'
import {NameComponent} from './name-component'
import {FriendService} from './friends'

@Component({
    selector: 'jazoon-app',
    template: `
        <h1>hello {{name}}</h1>
        <ul> 
            <li *ngFor="#friend of friends">{{friend}}</li>
        </ul>
    `,
    directives: [NameComponent],
    providers: [FriendService]
})
export class App {
    myName:string;
    isDisabled: boolean = false;
    foos: string[];
    friends: string[];
    constructor(friendsService: FriendService) {
        this.friends = friendsService.list;
    }
}