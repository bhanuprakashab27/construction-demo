import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


projects: number = 0;
services : number = 0;;
testimonials :number = 0;;
leads : any[] = [];

constructor(private dataService:DataService){}
ngOnInit() {
  this.getAllProject();
  this.getAllService();
  this.getAllTestimonials();
  this.getAllLeads();
}
getAllProject(){
  this.dataService.getAdminProjects().subscribe(data =>{
    this.projects = data.length;
  })
}
getAllService(){
  this.dataService.getAllServices().subscribe(data=>{
    this.services = data.length;
  })
}

getAllTestimonials(){
  this.dataService.getAllTestimonial().subscribe(t =>{
    this.testimonials = t.length;
  })
}
getAllLeads(){
  this.dataService.getAllContactLead().subscribe(data => {
    this.leads = data;
  })
}
get stats() {
  return [
    { title: 'Projects', count: this.projects, icon: 'fas fa-building' },
    { title: 'Services', count: this.services, icon: 'fas fa-tools' },
    { title: 'Testimonials', count: this.testimonials, icon: 'fas fa-comments' },
    { title: 'Leads', count: this.leads.length, icon: 'fas fa-envelope' }
  ];
}

}
