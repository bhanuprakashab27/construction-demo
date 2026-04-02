import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('statsSection') statsSection!: ElementRef;

  projectsCount = 0;
  experienceCount = 0;
  engineersCount = 0;
  satisfactionCount = 0;

  counterStarted = false;

  ngAfterViewInit(){

    const observer = new IntersectionObserver((entries)=>{

      entries.forEach(entry=>{

        if(entry.isIntersecting && !this.counterStarted){

          this.startCounters();
          this.counterStarted = true;

        }

      });

    },{ threshold:0.4 });

    observer.observe(this.statsSection.nativeElement);

  }


  startCounters(){

    this.animateCounter('projectsCount',50,2000);
    this.animateCounter('experienceCount',10,2000);
    this.animateCounter('engineersCount',40,2000);
    this.animateCounter('satisfactionCount',100,2000);

  }


  animateCounter(field:string,target:number,duration:number){

    let start = 0;

    const increment = target / (duration / 20);

    const timer = setInterval(()=>{

      start += increment;

      if(start >= target){
        (this as any)[field] = target;
        clearInterval(timer);
      }else{
        (this as any)[field] = Math.floor(start);
      }

    },20);

  }

}