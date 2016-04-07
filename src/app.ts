import {Component} from 'angular2/core'
import {NameComponent} from './name-component'
import {FriendService} from './friends'

@Component({
    selector: 'jazoon-app',
    template: `
        <h1>hello {{name}}</h1>
        <ul> 
            <li *ngFor="#friend of friendsService.list">{{friend}}</li>
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
    constructor(public friendsService: FriendService) {
    }
}