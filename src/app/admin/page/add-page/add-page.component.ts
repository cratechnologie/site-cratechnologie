import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/models/page.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styles: [
  ]
})
export class AddPageComponent implements OnInit {

  page: Page

  constructor(
    private pageService: PageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.page = new Page();
  }

  addPage(page: Page): void {
    // this.pageService.createPage(page)
    //   .subscribe((page) => this.router.navigate(['admin/page']))
  }

}
