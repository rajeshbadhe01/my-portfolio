import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  certifications: Certification[] = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Dec 2023',
      credentialUrl: 'https://aws.amazon.com/verification',
    },
    {
      title: 'Angular Advanced Architect & Masterclass',
      issuer: 'Udemy / Pluralsight Academy',
      date: 'Jun 2024',
      credentialUrl: 'https://udemy.com/certificate',
    },
    {
      title: 'Node.js Certified Application Developer',
      issuer: 'OpenJS Foundation',
      date: 'Oct 2023',
      credentialUrl: 'https://openjsf.org',
    },
    {
      title: 'Full Stack Web Development Certification',
      issuer: 'freeCodeCamp.org',
      date: 'Aug 2021',
      credentialUrl: 'https://freecodecamp.org/certification',
    },
  ];
}
