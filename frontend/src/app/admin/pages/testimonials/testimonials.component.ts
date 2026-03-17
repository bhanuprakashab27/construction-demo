import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

  testimonials:any[]=[];

testimonialForm:FormGroup;

editMode=false;

editIndex:any;

imagePreview:any=null;

selectedFile:any;

@ViewChild('imageInput') imageInput!:ElementRef;

constructor(private fb:FormBuilder){

this.testimonialForm=this.fb.group({

name:[''],
role:[''],
message:[''],
rating:['5'],
status:['active']

});

}

onImageSelect(event:any){

const file=event.target.files[0];

if(file){

this.selectedFile=file;

const reader=new FileReader();

reader.onload=()=>{

this.imagePreview=reader.result;

};

reader.readAsDataURL(file);

}

}

saveTestimonial(){

const data={

...this.testimonialForm.value,
image:this.imagePreview

};

if(this.editMode){

this.testimonials[this.editIndex]=data;

}else{

this.testimonials.push(data);

}

this.resetModal();

}
editTestimonial(t:any,index:number){

this.editMode=true;

this.editIndex=index;

this.testimonialForm.patchValue(t);

this.imagePreview=t.image;

}

deleteTestimonial(index:number){

if(confirm("Delete testimonial?")){

this.testimonials.splice(index,1);

}

}

resetModal(){

this.testimonialForm.reset();

this.imagePreview=null;

this.editMode=false;

this.editIndex=null;

if(this.imageInput){

this.imageInput.nativeElement.value='';

}

}
}
