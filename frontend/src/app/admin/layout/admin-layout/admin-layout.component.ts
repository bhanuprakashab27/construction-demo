import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  imports: [CommonModule,RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

  sidebarOpen = false;

  constructor(private auth:AuthService){}

  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(){
    this.sidebarOpen = false;
  }

  logout(){

  this.auth.logout();

}


}
