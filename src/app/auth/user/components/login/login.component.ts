import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({
    username:new FormControl('' , Validators.required),
    password:new FormControl('' , Validators.required)
  })
  constructor(private authService:AuthService , private router:Router) { }

  ngOnInit(): void {

  }

  onLogin(): void {
    if (this.loginForm.valid) {
console.log('shereen')
      this.authService.login(this.loginForm.value).subscribe(res =>{
        this.router.navigate(["/product"]); // this code in success status
      },
      err => console.log(err) // this code in success status
      );
    }
  }
}
