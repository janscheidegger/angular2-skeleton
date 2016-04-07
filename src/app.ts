import {Component} from 'angular2/core'
import {NameComponent} from './name-component'

@Component({
    selector: 'jazoon-app',
    template: `
        <h1>hello {{name}}</h1>
        <input type="text" [(ngModel)]="myName">
        <name-component  [(name)]="myName"></name-component>
    `,
    directives: [NameComponent]
})
export class App {
    myName:string;
    isDisabled: boolean = false;
    foos: string[];
    constructor() {
        this.foos = ['rob', 'sam', 'carry'];
        this.myName = 'Jan'
    }
    nameChanged(name) {
        this.myName = name;
    }
}