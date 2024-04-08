import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageModel } from 'src/app/models/image-model.model';
import { Page } from 'src/app/models/page.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [
  ]
})
export class DetailPageComponent implements OnInit {
  page: Page | undefined;

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageService.getPageById(id).subscribe(
        (page) => this.page = page
      )
    }
  }

  goBack(): void {
    this.router.navigate(['admin/page']);
  }

  goToEditPage(id: number): void {
    this.router.navigate(['admin/page/edit', id])
  }

  goToDeletePage(pageId: number) {
    this.pageService.deletePage(pageId)
      .subscribe((response) => this.goBack())
  }

  getImageUrl(image: ImageModel): string {
    if (image && image.picByte && image.type) {
      return `data:${image.type};base64,${image.picByte}`;
    }
    return 'URL_de_fallback_si_pas_d_image';
  }
}
