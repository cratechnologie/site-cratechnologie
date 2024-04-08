import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { Category } from 'src/app/models/category.model';
import { ImageModel } from 'src/app/models/image-model.model';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styles: [
  ]
})
export class ArticleFormComponent {
  @Input() article: Article;
  imageFile: File;
  categoryList: Category[];

  constructor(private articleService: ArticleService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(
      (categoryList) => this.categoryList = categoryList
    );
  }

  goBack(): void {
    this.router.navigate(['admin/article']);
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('imageFile', this.imageFile);
    formData.append('articleJson', JSON.stringify(this.article));
    console.log(this.article)
    console.log(formData)
    this.articleService.createArticle(this.article, formData).subscribe(() => {
      this.goBack();
    });
  }

  onImageSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.imageFile = fileList[0];
    }
  }

  getImageUrl(image: ImageModel): string {
    if (image && image.picByte && image.type) {
      return `data:${image.type};base64,${image.picByte}`;
    }
    return 'URL_de_fallback_si_pas_d_image';
  }

}
