import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ImageModel } from 'src/app/models/image-model.model';
import { Page } from 'src/app/models/page.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styles: [
  ]
})
export class PageFormComponent {
  @Input() page: Page;
  imageFile: File;

  constructor(private pageService: PageService, private router: Router) { }

  ngOnInit() { }

  goBack(): void {
    this.router.navigate(['admin/page']);
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('imageFile', this.imageFile);
    formData.append('pageJson', JSON.stringify(this.page));

    this.pageService.createPage(this.page, formData).subscribe(() => {
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
