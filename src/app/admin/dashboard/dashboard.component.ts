import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth/user/services/auth.service';
import { Router } from '@angular/router';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { User } from '../../auth/user/models/user';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  status: boolean = true;
  editorText = '';
  public Editor = DecoupledEditor;
  htmlData: string = '<p>Hello, world!</p>';
  public safeText: SafeHtml = this._sanitizer.bypassSecurityTrustHtml('');
  // .bypassSecurityTrustHtml('<p style="background-color: red">Hello World!</p>');
  data: {name:string , password: string , desc: string} = {name:'' , password: '' , desc: ''}
  testForm: FormGroup=new FormGroup({
    username:new FormControl('' , Validators.required),
    password:new FormControl('' , Validators.required),
    desc:new FormControl('')
  })
  constructor(private _authService: AuthService , 
              private _router:Router , 
              private readonly _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
    
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
    
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
    
        ['clean'],                                         // remove formatting button
    
        ['link', 'image', 'video']                         // link and image, video
      ]
    };
  }

  change(event: any){
    console.log(event);
    this.editorText = event['editor']['root']['innerHTML']
  }

  onLogin(): void {
    if (this.testForm.valid) {
      this.data.desc = this.testForm.value.desc;
      this.data.name = this.testForm.value.username;
      this.data.password = this.testForm.value.password;
      this.safeText = this._sanitizer
      .bypassSecurityTrustHtml(this.testForm.value.desc);
      console.log(this.testForm.value.desc)
    }
  }

  clickEvent(){
    this.status = !this.status;
  }
  public onReady(editor:any) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    console.log( data );
  }
}
