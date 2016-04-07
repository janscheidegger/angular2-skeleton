import {Injectable} from "angular2/core";

@Injectable()
export class HttpFakeService {}

@Injectable()
export class FriendService {
    list: string[];
    constructor (http:HttpFakeService) {
        this.list = ['Sven', 'Peter'];
    }
}