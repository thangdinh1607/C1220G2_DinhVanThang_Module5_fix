import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  createForm = new FormGroup(
    {
      id: new FormControl('', [Validators.required, Validators.min(0)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    }
  );

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveCategory() {
    const category = this.createForm.value;
    this.categoryService.saveCategory(category).subscribe(() => {
      this.createForm.reset();
    });
    this.router.navigateByUrl('category/list');
  }
}
