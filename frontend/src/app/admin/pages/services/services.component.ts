import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services = [

{
icon:'fas fa-home',
title:'Residential Construction',
description:'Modern and luxury home construction.',
status:'Active'
},

{
icon:'fas fa-building',
title:'Commercial Construction',
description:'Office and commercial building projects.',
status:'Active'
},

{
icon:'fas fa-couch',
title:'Interior Design',
description:'Modern interior planning and decoration.',
status:'Active'
}

];

// services:any[]=[];

serviceForm:FormGroup;

editMode=false;

editIndex:any;

imagePreview:any=null;

selectedFile:any;

@ViewChild('imageInput') imageInput!:ElementRef;

constructor(private fb:FormBuilder){

this.serviceForm=this.fb.group({

title:[''],
icon:['fas fa-home'],
description:[''],
status:['active']

});

}

onImageSelect(event:any){

const file = event.target.files[0];

if(file){

this.selectedFile=file;

const reader=new FileReader();

reader.onload=()=>{

this.imagePreview=reader.result;

};

reader.readAsDataURL(file);

}

}

saveService(){

const service={

...this.serviceForm.value,
image:this.imagePreview

};

if(this.editMode){

this.services[this.editIndex]=service;

}else{

this.services.push(service);

}

this.resetModal();

}



editService(service:any,index:number){

this.editMode=true;

this.editIndex=index;

this.serviceForm.patchValue(service);

this.imagePreview=service.image;

}

deleteService(index:number){

if(confirm("Delete this service?")){

this.services.splice(index,1);

}

}

resetModal(){

this.serviceForm.reset();

this.imagePreview=null;

this.selectedFile=null;

this.editMode=false;

this.editIndex=null;

if(this.imageInput){

this.imageInput.nativeElement.value='';

}

}

}
