import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGaurdService implements CanActivate {
    constructor(private _authService: AuthService , 
                private _router: Router){}

    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this._authService.currentUser$.pipe(
            map(auth => {
                if(auth){
                    return true;
                }
                this._router.navigate(['account/login'] , {queryParams: {returnUrl: state.url}});
                return false;
            })
        )
    }

}