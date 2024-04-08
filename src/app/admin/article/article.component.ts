import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ImageModel } from 'src/app/models/image-model.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: [
  ]
})
export class ArticleComponent implements OnInit {

  articleList: Article[];

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articleService.getAllArticles().subscribe(
      (articleList) => this.articleList = articleList
    );
  }

  goBack(): void {
    this.router.navigate(['admin/article']);
  }

  goToDetail(id: number): void {
    this.router.navigate(['admin/article/detail', id])
  }

  goToEditArticle(id: number): void {
    this.router.navigate(['admin/article/edit', id])
  }

  goToDeleteArticle(articleId: number) {
    this.articleService.deleteArticle(articleId)
      .subscribe((response) => this.goBack())
  }

  getImageUrl(image: ImageModel): string {
    if (image && image.picByte && image.type) {
      return `data:${image.type};base64,${image.picByte}`;
    }
    return 'URL_de_fallback_si_pas_d_image';
  }


}