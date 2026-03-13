import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage = '';
  loading = false;
  toastMessage = '';
  showToast = false;


  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService) {

    this.contactForm = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(3)]],

      email: ['', [Validators.required, Validators.email]],

      subject: ['', [Validators.required]],

      message: ['', [Validators.required, Validators.minLength(10)]]

    });

  }

  submitForm() {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    const formData = this.contactForm.value;

    this.dataService.sendMessage(formData)
.subscribe({

        next: () => {

          this.loading = false;

          this.showSuccessToast("Message sent successfully!");

          this.contactForm.reset();

        },

        error: (err) => {

          this.loading = false;

           this.showSuccessToast("Message not sent!");

          console.log(err);

        }

      });

  }


  showSuccessToast(message: string) {

    this.toastMessage = message;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);

  }


}