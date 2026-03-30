import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {

  project:any;

constructor(
private route:ActivatedRoute,
private dataService:DataService
){}

ngOnInit(){

const id=this.route.snapshot.paramMap.get('id');

this.dataService.getAdminProjects().subscribe(data=>{

this.project=data.find((p:any)=>p.id===id);

});

}



}
