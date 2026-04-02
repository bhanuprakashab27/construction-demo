import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {

  testimonials:any[]=[];

testimonialForm:FormGroup;

editMode=false;

selectedTestominalId:any;

imagePreview:any=null;

selectedFile:any;

@ViewChild('imageInput') imageInput!:ElementRef;

constructor(private fb:FormBuilder, private dataService:DataService){

this.testimonialForm=this.fb.group({

name:[''],
role:[''],
message:[''],
rating:['5'],
status:['active']

});

}

  ngOnInit(){
   this.getAllTestimonial();
  }

  getAllTestimonial(){
    this.dataService.getAllTestimonial().subscribe(data =>{
      this.testimonials = data;
    })
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

const testimonial={

...this.testimonialForm.value,
image:this.imagePreview

};

if(this.editMode){
this.dataService.updateTestimonial(this.selectedTestominalId,testimonial).subscribe({
  next: () =>{
    this.getAllTestimonial();
  },
  error: (err) =>console.error(err)
})


}else{
  this.dataService.saveTestimonial(testimonial).subscribe({
    next: () => {
      this.getAllTestimonial();
    },
    error : (err) => console.error(err)
  })

}

this.resetModal();

}
editTestimonial(t:any,id:any){

this.editMode=true;

this.selectedTestominalId=id;

this.testimonialForm.patchValue(t);

this.imagePreview=t.image;

}

deleteTestimonial(id:any){

if(confirm("Delete testimonial?")){

this.dataService.deleteTestimonial(id).subscribe({
  next: () => {
    this.getAllTestimonial();
  },
  error: (err) => console.error(err)
})

}

}

resetModal(){

this.testimonialForm.reset();

this.imagePreview=null;

this.editMode=false;

// this.editIndex=null;

if(this.imageInput){

this.imageInput.nativeElement.value='';

}

}

createStars(rating: number): number[] {
  return Array.from({ length: rating || 0 });
}
}
