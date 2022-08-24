import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  addCategoryForm: FormGroup = new FormGroup({
    title:new FormControl('' , Validators.required)
  });;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }
}
