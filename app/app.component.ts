import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Article} from './article';
import {ArticleComponent} from './article.component';


@Component({
    selector: 'articles',
    templateUrl: 'app/app.component.html',
    directives: [ArticleComponent]
})

export class AppComponent {

}

var ARTICLES : Article[] = [
    new Article(
        'Title',
        'Desc',
        'http://link.com'
    ),
    new Article(
        'Title 2',
        'Desc 2',
        'http://link 2.com'
    )
]