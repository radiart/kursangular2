import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
    selector: 'articles',
    template: `
        <ul>
            <li *ngFor = " #day of days ">{{ day }}</li>
        </ul>
    `
})

export class AppComponent {
    days: string[];

    constructor() {
        this.days = [
            'Sunday' ,
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
    }
}