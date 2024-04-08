import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styles: [
  ]
})
export class EditCategoryComponent implements OnInit {

  category: Category | undefined

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.categoryService.getCategoryById(id).subscribe(
        (category) => this.category = category
      );
    }
  }

}
