import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  categoryDeleteName: string;
  categoryDeleteId: number;
  categoryDelete: Category;

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAllCategory().subscribe(category => {
      this.categories = category;
      this.collectionSize = this.categories.length;
    });
  }

  sendIdDelete(id: number) {
    this.categoryService.findById(id).subscribe(c => {
      this.categoryDeleteId = id;
      this.categoryDelete = c;
      this.categoryDeleteName = c.name;
    });
  }

  deleteCategory() {
    console.log(this.categoryDeleteId);
    this.categoryService.deleteCategory(this.categoryDeleteId).subscribe(() => {
    }, error => {
      console.log('dads');
    }, () => {
     this.getAll();
    });
  }
}
