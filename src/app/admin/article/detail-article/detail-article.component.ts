import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ImageModel } from 'src/app/models/image-model.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styles: [
  ]
})
export class DetailArticleComponent implements OnInit {
  article: Article | undefined;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getArticleById(id).subscribe(
        (article) => this.article = article
      )
    }
  }

  goBack(): void {
    this.router.navigate(['admin/article']);
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
