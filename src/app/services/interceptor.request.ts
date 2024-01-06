import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, of, switchMap, tap, throwError } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { Router, response } from "express";

@Injectable()

export class InterceptorRequest implements HttpInterceptor {


  constructor() {
  }

  private authenticationService = inject(AuthenticationService);
  private router = inject(Router);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(next.handle(request));
    return next.handle(request).pipe(catchError(err => {
        if (err.status === 401) {
          this.router.navigate(['login']);
          this.authenticationService.logout();
        }

        const error = err.error.message || err.statusText;
       throw(error);
    }));
}
  }

