import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [CommonModule,RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

  sidebarOpen = false;

  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(){
    this.sidebarOpen = false;
  }


}
