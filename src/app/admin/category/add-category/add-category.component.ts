import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styles: [
  ]
})
export class AddCategoryComponent implements OnInit {

  category: Category

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.category = new Category();
  }

  addCategory(category: Category): void {
    // this.categoryService.createCategory(category)
    //   .subscribe((category) => this.router.navigate(['admin/category']))
  }

}
