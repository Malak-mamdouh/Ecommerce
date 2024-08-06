import {Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser';
import { AuthService } from '../../auth/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { Chart } from 'chart.js';
declare const $: any;

export interface Element {
  name: string;
  name2: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen' , name2: 'Neon', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', name2: 'boron' ,  weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', name2: 'oxygen' ,weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', name2:'Beryllium' , weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', name2:'Beryllium' , weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Neon', name2: 'dd' ,  weight: 20.1797, symbol: 'Ne'}]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  status: boolean = true;
  editorText = '';
  public Editor = DecoupledEditor;
  
  htmlData: string = '<p>Hello, world!</p>';
  public safeText: SafeHtml = this._sanitizer.bypassSecurityTrustHtml('');
  data: {name:string , password: string , desc: string} = {name:'' , password: '' , desc: ''}
  testForm: FormGroup=new FormGroup({
    username:new FormControl('' , Validators.required),
    password:new FormControl('' , Validators.required),
    desc:new FormControl('')
  })
  displayedColumns = ['position', 'name', 'name2' ,  'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  colors = ['Red','Blue','Yellow']

  constructor(private _authService: AuthService , 
              private _router:Router , 
              private readonly _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'pie',
       data: {
        labels: this.colors,
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
    });
    
    this.dataSource.filterPredicate =function (data: Element , filterValue: string) {
      return data.name2 == filterValue;
    }
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

  applyFilter(event: any) {
    let filterValue = event.target.value;
    var data = this.dataSource.data;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // this.dataSource.data = this.dataSource.data.map((row) => {
    //   let data = {}
    //     = row.name2.toLowerCase();
    // })
    console.log(filterValue);
    console.log(this.dataSource.data);
    this.dataSource.filter = filterValue;
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
