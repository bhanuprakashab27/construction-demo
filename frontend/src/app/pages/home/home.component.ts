import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Service } from '../../entity/service';
import { DataService } from '../../services/data.service';
import { CommonModule, NgFor } from '@angular/common';
import { Project } from '../../entity/project';
import { WhyChoose } from '../../entity/whychoose';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-home',
  imports: [CommonModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

    @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  services: Service[] = [];
  projects: Project[] = [];
  whyChoose: WhyChoose[] = [];
  testimonials:any[]=[];


  constructor(private dataService: DataService) {}

intervalId:any;

ngAfterViewInit(){

new Swiper('.testimonialSwiper',{

modules:[Pagination,Autoplay],

loop:true,

spaceBetween:30,

autoplay:{
delay:3000,
disableOnInteraction:false
},

pagination:{
el:'.swiper-pagination',
clickable:true
},

breakpoints:{

0:{
slidesPerView:1
},

768:{
slidesPerView:2
},

1024:{
slidesPerView:3
}

}

});

}

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