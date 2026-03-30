import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  @ViewChild('mainImageInput') mainImageInput!: ElementRef;

@ViewChild('galleryInput') galleryInput!: ElementRef;


 

projects:any[]=[];

projectForm:FormGroup;

selectedFile:any;

editMode=false;

editIndex:any;
selectedProjectId: any;

constructor(private fb:FormBuilder, private dataService:DataService){

this.projectForm=this.fb.group({

title:[''],
category:[''],
location:[''],
status:['active'],
description:['']

});

}


  ngOnInit() {
   
    this.getAllProjects();
  }

  getAllProjects(){
     this.dataService.getAdminProjects().subscribe(data=>{
    this.projects=data;
  
   
  });
  }



editProject(project:any,index:any){

this.editMode = true;
this.selectedProjectId = project.id;
this.editIndex = index;

this.projectForm.patchValue(project);

this.imagePreview = project.image;

}


saveProject(){
const project = {

...this.projectForm.value,
image:this.imagePreview,
gallery:this.galleryPreview

};


if (this.editMode) {
// update
    this.dataService.updateProject(this.selectedProjectId, project)
      .subscribe({
        next: () => {
          this.getAllProjects(); 
          this.resetModal();
        },
        error: (err) => console.error(err)
      });

  } else {

    // CREATE
    this.dataService.saveAdminProject(project)
      .subscribe({
        next: () => {
          this.getAllProjects(); // refresh list
          this.resetModal();
        },
        error: (err) => console.error(err)
      });

  }

this.resetModal();

}

deleteProject(id:any){

if(confirm("Are you Sure Delete this project?")){

this.dataService.deleteproject(id).subscribe({
  next: () => {
          this.getAllProjects(); 
         
        },
        error: (err) => console.error(err)
      });

}

}





imagePreview:any = null;

onFileSelect(event:any){

const file = event.target.files[0];

if(file){

this.selectedFile = file;

const reader = new FileReader();

reader.onload = () => {

this.imagePreview = reader.result;

};

reader.readAsDataURL(file);

}

}

resetModal(){

this.projectForm.reset();

this.editMode = false;

this.editIndex = null;

this.selectedFile = null;

this.imagePreview = null;

this.galleryFiles = [];

this.galleryPreview = [];

/* reset file inputs */

if(this.mainImageInput){

this.mainImageInput.nativeElement.value = '';

}

if(this.galleryInput){

this.galleryInput.nativeElement.value = '';

}

}


searchText='';

page=1;

pageSize=5;

filteredProjects(){

return this.projects.filter(p =>

p.title.toLowerCase().includes(this.searchText.toLowerCase()) ||

p.category.toLowerCase().includes(this.searchText.toLowerCase()) ||

p.location.toLowerCase().includes(this.searchText.toLowerCase())

);

}

// 

galleryFiles: File[] = [];

galleryPreview: any[] = [];

onGallerySelect(event:any){

const files = event.target.files;

for(let file of files){

this.galleryFiles.push(file);

const reader = new FileReader();

reader.onload = () => {

this.galleryPreview.push(reader.result);

};

reader.readAsDataURL(file);

}

}
removeGalleryImage(index:number){

this.galleryFiles.splice(index,1);

this.galleryPreview.splice(index,1);

}


}
