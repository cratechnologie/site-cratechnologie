import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { ImageModel } from 'src/app/models/image-model.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styles: [
  ]
})
export class DetailCategoryComponent implements OnInit {
  category: Category | undefined;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.categoryService.getCategoryById(id).subscribe(
        (category) => this.category = category
      )
    }
  }

  goBack(): void {
    this.router.navigate(['admin/category']);
  }

  goToEditCategory(id: number): void {
    this.router.navigate(['admin/category/edit', id])
  }

  goToDeleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId)
      .subscribe((response) => this.goBack())
  }

  getImageUrl(image: ImageModel): string {
    if (image && image.picByte && image.type) {
      return `data:${image.type};base64,${image.picByte}`;
    }
    return 'URL_de_fallback_si_pas_d_image';
  }
}
