import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule,RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
projects:any[]=[];
filteredProjects:any[]=[];
selectedCategory:string='all';

constructor(private dataService:DataService){}

ngOnInit(){

  this.dataService.getAdminProjects().subscribe(data=>{
    this.projects=data;
    this.filteredProjects=data;
  });

}

filter(category:string){

this.selectedCategory = category;

this.filteredProjects = category === 'all'
  ? this.projects
  : this.projects.filter(p => p.category === category);

}
trackByProject(index:number, project:any){
  return project.id;
}

}