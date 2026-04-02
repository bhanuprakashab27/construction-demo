import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-services',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {

//   services = [

// {
// icon:'fas fa-home',
// title:'Residential Construction',
// description:'Modern and luxury home construction.',
// status:'Active'
// },

// {
// icon:'fas fa-building',
// title:'Commercial Construction',
// description:'Office and commercial building projects.',
// status:'Active'
// },

// {
// icon:'fas fa-couch',
// title:'Interior Design',
// description:'Modern interior planning and decoration.',
// status:'Active'
// }

// ];

services:any[]=[];

serviceForm:FormGroup;

editMode=false;

selectedServiceId:any;

imagePreview:any=null;

selectedFile:any;

@ViewChild('imageInput') imageInput!:ElementRef;

constructor(private fb:FormBuilder, private dataService:DataService){

this.serviceForm=this.fb.group({

title:[''],
icon:['fas fa-home'],
description:[''],
status:['active']

});

}
ngOnInit(): void {
 this.getAllService();
  
}

getAllService(){
  this.dataService.getAllServices().subscribe(data =>{
    this.services = data;
  })
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

featureControl = new FormControl('');
features: string[] = [];

addFeature() {
  const value = this.featureControl.value;

  if (value && value.trim()) {
    this.features.push(value.trim());
    this.featureControl.setValue('');
  }
}

removeFeature(index: number) {
  this.features.splice(index, 1);
}
saveService(){

const service={

...this.serviceForm.value,
image:this.imagePreview,
 features: this.features

};

if(this.editMode){
  this.dataService.updateService(this.selectedServiceId,service).subscribe({
    next : () => {
      this.getAllService();
     
    },
    error: (err) => console.error(err)
  })


}else{
  this.dataService.saveService(service).subscribe({
    next: () => {
      this.getAllService();
    },
    error: (err) => console.error(err)
  })


}

this.resetModal();

}



editService(service:any,id:any){

this.editMode=true;

this.selectedServiceId=id;

this.serviceForm.patchValue(service);

this.imagePreview=service.image;

}

deleteService(id:any){

if(confirm("Delete this service?")){
 this.dataService.deleteService(id).subscribe({
  next: () =>{
    this.getAllService();
  },
  error: (err) => console.error(err)
 })


}

}

resetModal(){

this.serviceForm.reset();

this.imagePreview=null;

this.selectedFile=null;

this.editMode=false;

// this.editIndex=null;

if(this.imageInput){

this.imageInput.nativeElement.value='';

}

}

}
