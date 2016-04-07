import {Component, Input, Output, EventEmitter} from "angular2/core";
@Component({
    selector: 'name-component',
    template: `
        <div>My Name is {{name}}</div>
        <button (click)="changeName()">Change</button>
    `
})

export class NameComponent{
    @Input() name:string;
    @Output() nameChange: EventEmitter<string> = new EventEmitter()
    changeName() {
        this.nameChange.emit(this.name + '!!');
    }

}