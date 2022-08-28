import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { CategoryModel } from '../../categories/category.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  addProductForm: FormGroup = new FormGroup({
    sku: new FormControl('' , Validators.required),
    name:new FormControl('' , Validators.required),
    price:new FormControl(null , Validators.required),
    stock:new FormControl(null , Validators.required),
    order:new FormControl(null , Validators.required),
    category:new FormControl(0 , Validators.required),
    uploadForm: new FormGroup({
      image: new FormControl('')
    })
  });
  file: any;
  public Editor = DecoupledEditor;
  htmlData: string = '<p>Hello, world!</p>';
  public safeText: SafeHtml = this._sanitizer.bypassSecurityTrustHtml('');
  categories: CategoryModel[] = 
  [{id: 1 ,name : 'mobile' , description: 'ddd' , order: 1 , status: true} , 
  {id: 2 ,name : 'laptop' , description: 'ddd' , order: 2 , status: true}];

  constructor(private readonly _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get getUploadFile(){
    return this.addProductForm.controls.uploadForm as FormGroup;
  }

  public onReady(editor:any) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  onSubmit(){
    console.log(this.addProductForm.value);
  }

}
