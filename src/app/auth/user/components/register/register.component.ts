import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
