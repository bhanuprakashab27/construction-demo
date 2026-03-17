import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  @ViewChild('mainImageInput') mainImageInput!: ElementRef;

@ViewChild('galleryInput') galleryInput!: ElementRef;


  projects = [

{
title:'Luxury Villa',
category:'residential',
location:'Bangalore',
status:'active',
image:'assets/images/project1.jpg',
description: 'bsachsbdjgcyugdvhcbkuhic hjhdwaxzmqxhv'
},

{
title:'Corporate Office',
category:'commercial',
location:'Hyderabad',
status:'active',
image:'assets/images/project2.jpg',
description: 'bsachsbdjgcyugdvhcbkuhic hjhdwaxzmqxhv'
},

{
title:'Modern Inteior',
category:'interior',
location:'Chennai',
status:'active',
image:'assets/images/project3.jpg',
description: 'bsachsbdjgcyugdvhcbkuhic hjhdwaxzmqxhv'
},

{
title:'Modern Interior',
category:'interior',
location:'Chennai',
status:'active',
image:'assets/images/project3.jpg',
description: 'bsachsbdjgcyugdvhcbkuhic hjhdwaxzmqxhv'
},

{
title:'Modern Iterior',
category:'interior',
location:'Chennai',
status:'active',
image:'assets/images/project3.jpg',
description: 'bsachsbdjgcyugdvhcbkuhic hjhdwaxzmqxhv'
},

{
title:'Modern Interio',
category:'interior',
location:'Chennai',
status:'active',
image:'assets/images/project3.jpg',
description: 'bsachsbdjgcyugdvhcbkuhic hjhdwaxzmqxhv'
},

{
title:'Modern nterior',
category:'interior',
location:'Chennai',
status:'active',
image:'assets/images/project3.jpg',
description: 'bsachsbdjgcyugdvhcbkuhic hjhdwaxzmqxhv'
}

];

// projects:any[]=[];

projectForm:FormGroup;

selectedFile:any;

editMode=false;

editIndex:any;

constructor(private fb:FormBuilder){

this.projectForm=this.fb.group({

title:[''],
category:[''],
location:[''],
status:['active'],
description:['']

});

}



editProject(project:any,index:number){

this.editMode = true;

this.editIndex = index;

this.projectForm.patchValue(project);

this.imagePreview = project.image;

}


saveProject(){

// const project = {

// ...this.projectForm.value,
// image: this.selectedFile ? URL.createObjectURL(this.selectedFile) : ''

// };

const project = {

...this.projectForm.value,
image:this.imagePreview,
gallery:this.galleryPreview

};


if(this.editMode){

this.projects[this.editIndex] = project;

}else{

this.projects.push(project);

}

this.resetModal();

}

deleteProject(index:number){

if(confirm("Delete this project?")){

this.projects.splice(index,1);

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
