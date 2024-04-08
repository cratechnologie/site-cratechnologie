import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styles: [
  ]
})
export class AddArticleComponent implements OnInit {

  article: Article

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.article = new Article();
  }

  addArticle(article: Article): void {
    // this.articleService.createArticle(article)
    //   .subscribe((article) => this.router.navigate(['admin/article']))
  }

}