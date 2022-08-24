import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  addProductForm: FormGroup = new FormGroup({
    title:new FormControl('' , Validators.required),
    price:new FormControl(0 , Validators.required),
    category:new FormControl('' , Validators.required),
    description:new FormControl('' , Validators.required),
    image: new FormControl('' , Validators.required)
  });
  file: any;
  public Editor = DecoupledEditor;
  htmlData: string = '<p>Hello, world!</p>';
  public safeText: SafeHtml = this._sanitizer.bypassSecurityTrustHtml('');
  constructor(private readonly _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getFile(event: any){
    this.file = event.target.files[0];
    console.log(this.file);
  }

  public onReady(editor:any) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  onSubmit(){

  }

}
