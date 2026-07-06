import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);
  loading = false;
  submitted = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.submitted = false;

    emailjs
      .send(
        'service_qlggdhn',
        'template_njil4gx',
        {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
        },
        'bXhVvKCSAa7gJsGz2',
      )
      .then(() => {
        this.submitted = true;
        this.toastService.show('Message sent successfully!', 'success');
        this.contactForm.reset();
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.toastService.show('Failed to send message. Please try again.', 'error');
        this.loading = false;
      });
  }
}
