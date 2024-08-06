import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { LoginModel } from './login.model';
import { RegisterModel } from './register.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser = new BehaviorSubject<User>({name: '' , token: ''}); //need to be changed to replay
  currentUser$ = this.currentUser.asObservable(); // public
  baseUrl = environment.apiUrl;

  constructor(private _http : HttpClient , private _router: Router) {
    // لو فيه اكسبير ديت للتوكن اتشيك عليه هنا الاول قبل ما اعمل ست للفاليو
      // this._isLoggedIn.next(!!this.Token)
   }

  login(login: LoginModel){ //return object of user
      return this._http.post('https://fakestoreapi.com/auth/login', login).pipe(
            map((user: any) =>{
            // console.log(res.token)  // كدا جبنا ال token
            // console.log(JSON.parse(atob(res.token.split(".")[1]))) // admin role
              if(user){
                this.currentUser.next(user)
                localStorage.setItem('token' , user.token)
              }
            })
        )
  }

  register(register: RegisterModel){ //return object of user
    return this._http.post('https://fakestoreapi.com/auth/login', register).pipe(
          map((user: any) =>{
          // console.log(res.token)  // كدا جبنا ال token
          // console.log(JSON.parse(atob(res.token.split(".")[1]))) // admin role
            if(user){
              this.currentUser.next(user)
              localStorage.setItem('token' , user.token)
            }
          })
      )
  }

  get Token() : any{
    return localStorage.getItem('token')
  }

  loadCurrentUser(){
    return this._http.get(this.baseUrl).pipe(
      map((user: any) => {
        if(user){
          this.currentUser.next(user)
          localStorage.setItem('token' , user.token)
        }
      })
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.currentUser.next({name: '' , token: ''});
    this._router.navigateByUrl('/');
  }

}
