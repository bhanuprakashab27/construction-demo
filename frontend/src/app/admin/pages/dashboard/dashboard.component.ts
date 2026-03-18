import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

projects = 12;
services = 6;
testimonials = 8;
leads = [
{ name:'Rahul', message:'Need villa', status:'new' },
{ name:'Priya', message:'Interior work', status:'contacted' }
];

stats = [

{ title:'Projects', count:this.projects, icon:'fas fa-building' },

{ title:'Services', count:this.services, icon:'fas fa-tools' },

{ title:'Testimonials', count:this.testimonials, icon:'fas fa-comments' },

{ title:'Leads', count:this.leads.length, icon:'fas fa-envelope' }

];

}
