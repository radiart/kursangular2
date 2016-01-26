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
    articles: Article[];
    articles = ARTICLES;

}

var ARTICLES : Article[] = [
    new Article(
        'Title',
        'Desc',
        'http://link.com',
        0
    ),
    new Article(
        'Title 2',
        'Desc 2',
        'http://link 2.com',
        0
    )
]