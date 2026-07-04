import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  submitted = false;

  onSubmit() {
    if (this.form.name && this.form.email && this.form.subject && this.form.message) {
      console.log('Form Submitted:', this.form);
      this.submitted = true;
      
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    }
  }
}
