import { Injectable } from '@angular/core';

export class Reasons {
    ID: number;
    ReasonName: string;
}


let employees: Reasons[] = [{
    "ID": 1,
    "ReasonName": "John"
}, {
    "ID": 2,
    "ReasonName": "Olivia"
}, {
    "ID": 3,
    "ReasonName": "John"
}, {
    "ID": 4,
    "ReasonName": "Olivia"
}, {
    "ID": 5,
    "ReasonName": "John"
}];

@Injectable()
export class Service {
    getEmployees() {
        return employees;
    }
}