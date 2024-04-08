import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageModel } from 'src/app/models/image-model.model';
import { Page } from 'src/app/models/page.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: [
  ]
})
export class PageComponent implements OnInit {

  pageList: Page[];

  constructor(
    private pageService: PageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pageService.getAllPages().subscribe(
      (pageList) => this.pageList = pageList
    );
  }

  goBack(): void {
    this.router.navigate(['admin/page']);
  }

  goToDetail(id: number): void {
    this.router.navigate(['admin/page/detail', id])
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