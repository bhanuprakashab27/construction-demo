import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{

  services:any[] = [];
  features: any[] = [];
  faq: any[] = [];

  constructor(private dataService:DataService){}

  ngOnInit(){

    this.dataService.getAllServices().subscribe(data=>{
      this.services = data;
    });

   this.dataService.getServiceFeatures().subscribe(data=>{
    this.features = data;
  });

   this.dataService.getServiceFaq().subscribe(data=>{
    this.faq = data;
  });
  }

} {

}
