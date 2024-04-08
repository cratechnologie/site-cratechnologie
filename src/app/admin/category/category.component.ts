import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { ImageModel } from 'src/app/models/image-model.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent implements OnInit {

  categoryList: Category[];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(
      (categoryList) => this.categoryList = categoryList
    );
  }

  goBack(): void {
    this.router.navigate(['admin/category']);
  }

  goToDetail(id: number): void {
    this.router.navigate(['admin/category/detail', id])
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