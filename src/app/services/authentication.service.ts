import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { JwtModel } from '../models/JwtModel';
import { jwtDecode } from 'jwt-decode';
import { AccountModel } from '../models/AccountModel';
import { JwtPayload } from '../models/JwtPayload';
import { enviroment } from '../environments/enviroment';
import { TokenHandlerService } from './token.handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  TOKEN_NAME = "access_token";
  httpClient = inject(HttpClient);

  private accountModel: AccountModel | null = null;

  private token = new BehaviorSubject<JwtPayload | null>(null);
  token$: Observable<JwtPayload | null>;

  baseURL = "";// enviroment.baseApi;
  constructor(private tokenHandlerService: TokenHandlerService) {
    this.token$ = this.token.asObservable();

    if (typeof localStorage !== 'undefined') {
      const tokenStorage = localStorage?.getItem(this.TOKEN_NAME);

      if(tokenStorage){
        const token = jwtDecode<JwtPayload>(tokenStorage);
        this.token.next(token);
        //this.tokenHandlerService.showConfirmExpiredToken();
      }
    }

  }

  login(data: AccountModel): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(`${this.baseURL}/authentication/login`, data).pipe(
      tap(token => {

       const tokenValue = jwtDecode<JwtPayload>(token.accessToken);

       this.token.next(tokenValue);

       localStorage.setItem(this.TOKEN_NAME, token.accessToken);
       //this.tokenHandlerService.showConfirmExpiredToken();
      }),
      shareReplay()
    );
  }

  logout(){
    this.token.next(null);
    localStorage.removeItem(this.TOKEN_NAME);
  }
}
