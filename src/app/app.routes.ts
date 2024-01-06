import { Routes } from '@angular/router';
import { SitepageComponent } from './components/Ui/sitepage/sitepage.component';
import { AdminpageComponent } from './components/admin/UI/adminpage/adminpage.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { LoginRegisterComponent } from './components/Ui/login.register/login.register.component';

export const siteRoutes = [
    { path: 'home', component: HomeComponent },
    //{ path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginRegisterComponent },
    { path: '**', component: HomeComponent },
  ];
  
  export const adminRoutes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: DashboardComponent },
  ];
  
  export const routes: Routes = [
    { path: '', component: SitepageComponent, children: siteRoutes, pathMatch: 'full'  },
    { path: 'site', component: SitepageComponent, children: siteRoutes },
    { path: 'admin', component: AdminpageComponent, children: adminRoutes },
    { path: 'loginAdmin', component: LoginAdminComponent},
    { path: '**', component: SitepageComponent, children: siteRoutes },
  ];
  


