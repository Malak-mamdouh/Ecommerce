import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: any;
  @Input() ParentForm:FormGroup = new FormGroup({
    image: new FormControl('' , Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

  getFile(event: any){
    const formData = new FormData();
    this.file = event.target.files[0];
    formData.append('file' , this.file);
    /** request to save image and get url */

    console.log(this.file);
  }

}
