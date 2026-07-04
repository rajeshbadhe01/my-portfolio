import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
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
      title: 'Angular Basics',
      issuer: 'Simplilearn SkillUp',
      date: 'Jun 2025',
      description: 'Comprehensive Angular development program covering components, routing, RxJS, REST API integration, and best practices.',
      credentialUrl: 'https://www.simplilearn.com/skillup-free-online-courses',
    },
    {
      title: 'JavaScript Essentials',
      issuer: 'Simplilearn SkillUp',
      date: 'Apr 2025',
      description: 'Advanced JavaScript program focusing on ES6+, DOM manipulation, asynchronous programming, Promises, closures, and modular design.',
      credentialUrl: 'https://www.simplilearn.com/skillup-free-online-courses',
    },
    {
      title: 'Node.js Developer',
      issuer: 'Simplilearn SkillUp',
      date: 'May 2025',
      description: 'Backend program covering server architecture, REST API design, Node.js runtime, Fastify/Express routing, and SQL database integration.',
      credentialUrl: 'https://www.simplilearn.com/skillup-free-online-courses',
    },
  ];
}
