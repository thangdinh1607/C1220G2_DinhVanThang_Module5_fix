import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {


  editForm: FormGroup;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.findByIdCategory(this.getId());
  }

  getId() {
    return +this.activatedRoute.snapshot.params.id;
  }

  findByIdCategory(id: number) {
    return this.categoryService.findById(this.getId()).subscribe(c => {
      this.editForm = new FormGroup(
        {
          id: new FormControl(c.id, [Validators.required, Validators.min(0)]),
          name: new FormControl(c.name, [Validators.required, Validators.minLength(5)])
        }
      );
    });
  }

  updateCategory() {
    let category = this.editForm.value;
    this.categoryService.updateCategory(this.getId(), category).subscribe(() => {
      this.router.navigateByUrl('category/list');
    });
  }
}
