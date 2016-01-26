import {Component, OnInit} from 'angular2/core';
import {
    NgFor,
    FORM_DIRECTIVES,
    FormBuilder,
    Validators,
    ControlGroup,
    Control
} from 'angular2/common';
import {Article} from './article';
import {ArticleComponent} from './article.component';
import {ArticleService} from './article.service';

@Component({
    selector: 'articles',
    templateUrl: 'app/app.component.html',
    providers: [ArticleService],
    directives: [ArticleComponent, FORM_DIRECTIVES]
})

export class AppComponent implements OnInit {
    articles: Article[];
    articleForm: ControlGroup;

    // Validation
    title: Control = new Control();
    link: Control = new Control();
    description: Control = new Control();
    image: Control = new Control();

    constructor(
        private _articleService: ArticleService, // Service
        fb: FormBuilder;
    ) {
        this.articleForm = fb.group({
            'title': this.title,
            'link': this.link,
            'description': this.description,
            'image': this.image,
        });
    }

    getArticles(){
        this._articleService.getArticles()
            .then( articles => this.articles = articles )
    }

    ngOnInit(){
        this.getArticles();
    }
}