import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterModel } from '../register.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  baseUrl = environment.apiUrl;
  registerForm:FormGroup=new FormGroup({
    username:new FormControl('' , Validators.required),
    password:new FormControl('' , Validators.required)
  })
  register: RegisterModel = {
    username: '',
    password: '',
    rememberMe: false
  }
  messageValidate = {
    email: {
      required: 'email is required',
      validEmail: 'email is not valid'
    },
    password: {
      required: 'password is required',
      minlength: 'password must contain at least 8 characters'
    }
  };
  message = '';
  constructor(private _authService: AuthService , private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmitRegister(): void {
    this.mapRegisterModel();
    if (this.registerForm.valid) {
      this._authService.register(this.register).subscribe(res =>{
        this._router.navigate(["/product"]); // this code in success status
      },
      err => console.log(err) // this code in success status
      );
    }
  }

  mapRegisterModel(){
    this.register.username = this.registerForm.value.username;
    this.register.password = this.registerForm.value.password;
    this.register.rememberMe = this.registerForm.value.rememberMe
  }
}
