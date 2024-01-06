import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "../models/JwtPayload";
import { enviroment } from "../environments/enviroment";

@Injectable({providedIn: 'root'})

export class TokenHandlerService {

  constructor() {}

  TOKEN_NAME = "access_token";

  getTokenExpired(): number {
    const tokenStorage = localStorage.getItem(this.TOKEN_NAME);

      if(!tokenStorage){
        return 0;
      }
      const token = jwtDecode<JwtPayload>(tokenStorage);
      const expiredDate = token.exp;
      const currentDate = Math.floor(Date.now() / 1000);
      const seconds = expiredDate - currentDate;
      return seconds;
  }

  // showConfirmExpiredToken() {
  //   const defaultTimeOutToken = enviroment.expiredTokenTime;
  //   const intervalExpiredToken = setInterval(() => {
  //       const remainingTime = this.getTokenExpired();
  //       if(remainingTime <= defaultTimeOutToken){
  //         clearInterval(intervalExpiredToken);

  //         let dialogRef = this.dialog.open(ExpiredTokenPopupComponent, {
  //           data: { remainingTime: remainingTime},
  //         });
  //         dialogRef.afterClosed().subscribe(result => {
  //           console.log('The dialog was closed');
  //         });
  //       }
  //   }, 3000);
  // }
}
