import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { ImageModel } from 'src/app/models/image-model.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styles: [
  ]
})
export class CategoryFormComponent {
  @Input() category: Category;
  imageFile: File;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() { }

  goBack(): void {
    this.router.navigate(['admin/category']);
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('imageFile', this.imageFile);
    formData.append('categoryJson', JSON.stringify(this.category));

    this.categoryService.createCategory(this.category, formData).subscribe(() => {
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