import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'src/app/models/page.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styles: [
  ]
})
export class EditPageComponent implements OnInit {

  page: Page | undefined

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageService.getPageById(id).subscribe(
        (page) => this.page = page
      );
    }
  }

}
