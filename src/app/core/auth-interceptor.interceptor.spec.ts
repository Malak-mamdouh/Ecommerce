import { TestBed } from '@angular/core/testing';

import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { AuthService } from '../auth/auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthInterceptorInterceptor', () => {
  let authService: AuthService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule , RouterTestingModule],
        providers: [ AuthInterceptorInterceptor]
    }) ,
      // httpTestingController = TestBed.inject(HttpTestingController);
      authService = TestBed.inject(AuthService);
  });
  it('should be created', () => {
    const interceptor: AuthInterceptorInterceptor = TestBed.inject(AuthInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
