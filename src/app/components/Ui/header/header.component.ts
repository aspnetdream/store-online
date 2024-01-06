import { Component } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { AsyncPipe, NgIf } from '@angular/common';
declare const require: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

constructor(protected authenticationService: AuthenticationService) {

}

logout(){
  this.authenticationService.logout();
}
}
