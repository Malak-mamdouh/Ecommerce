import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor{
    constructor(private _authService: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let clonedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this._authService.Token}`
            }
        });
        return next.handle(clonedReq);
    }
}