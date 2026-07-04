import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  details?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  educationHistory: EducationItem[] = [
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'University of Maysore',
      duration: '2023 - 2026',
      details:
        'Specialised in Software Engineering, Database Management Systems, and Distributed Computing. Active member of the Technical Committee and participant in multiple national hackathons.',
    },
    {
      degree: 'Higher Secondary Certificate (HSC) - Science',
      institution: 'savitribai phule pune university',
      duration: '2021 - 2023',
      details: 'Focused on Mathematics, Physics, Chemistry, and Computer Science.',
    },
  ];
}
