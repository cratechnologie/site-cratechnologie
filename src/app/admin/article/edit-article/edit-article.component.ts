import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styles: [
  ]
})
export class EditArticleComponent implements OnInit {

  article: Article | undefined

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getArticleById(id).subscribe(
        (article) => this.article = article
      );
    }
  }

}
