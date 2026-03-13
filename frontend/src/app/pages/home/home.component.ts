import { Component } from '@angular/core';
import { Service } from '../../entity/service';
import { DataService } from '../../services/data.service';
import { CommonModule, NgFor } from '@angular/common';
import { Project } from '../../entity/project';
import { WhyChoose } from '../../entity/whychoose';

@Component({
  selector: 'app-home',
  imports: [CommonModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  services: Service[] = [];
  projects: Project[] = [];
  whyChoose: WhyChoose[] = [];
  testimonials:any[]=[];


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getServices().subscribe(data => {
      this.services = data;
    });

    this.dataService.getProjects().subscribe(data =>{
      this.projects = data;
    })

    this.dataService.getWhyChoose().subscribe(data => {
      this.whyChoose = data;
    })

    this.dataService.getTestimonials().subscribe(data => {
      this.testimonials = data;
    });

  }
}