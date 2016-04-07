npm install -g typescript typings lite-server
npm install

[something] property
(something) event

[ngModel]="myName" + (ngModelChange)="myName" = [(ngModel)]="myName"
[name] + (nameChanged)

 @Input() name:string;
 @Output() nameChange: EventEmitter<string> = new EventEmitter()
 changeName() {
    this.nameChange.emit(this.name + '!!');
 }


tsc --watch
lite-server
