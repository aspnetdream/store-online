import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { FooterAdminComponent } from '../footer-admin/footer-admin.component';
import { RouterOutlet } from '@angular/router';
import { SideMenuAdminComponent } from '../side-menu-admin/side-menu-admin.component';

@Component({
  selector: 'app-adminpage',
  standalone: true,
  imports: [HeaderAdminComponent, FooterAdminComponent, RouterOutlet, SideMenuAdminComponent],
  templateUrl: './adminpage.component.html',
  styleUrl: './adminpage.component.css'
})
export class AdminpageComponent {

}
