import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({
    email:new FormControl('' , [Validators.required , 
      Validators.email]),
    password:new FormControl('' , [Validators.required , Validators.minLength(8)]),
    rememberMe: new FormControl(false) 
  })
  login: LoginModel = {
    email: '',
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
  returnUrl = '';
  message = '';
  constructor(private _authService:AuthService , 
              private _router:Router , 
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this._activatedRoute.snapshot.queryParams.returnUrl || '/';
  }

  onSubmitLogin(): void {
    this.mapLoginModel();
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      console.log(this.loginForm);
      this._authService.login(this.login).subscribe(res =>{
        this._router.navigate([this.returnUrl]); // this code in success status
      },
      err => console.log(err) // this code in success status
      );
    }
  }

  mapLoginModel(){
    this.login.email = this.loginForm.value.email;
    this.login.password = this.loginForm.value.password;
    this.login.rememberMe = this.loginForm.value.rememberMe
  }
}
