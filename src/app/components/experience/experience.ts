import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  projects: string[];
  techStack: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      role: 'Angular Frontend Developer',
      company: 'The Baap Company',
      location: 'Sangamner, Maharashtra, India',
      duration: 'July 2025 – Present (1 Year)',
      description: [
        'Developed and engineered enterprise-level web applications using Angular 21, ensuring clean modular code structure and standard coding patterns.',
        'Integrated secure REST APIs with high-performance backend services built using Node.js and Fastify, handling complex JSON payload serialization.',
        'Built modern, responsive, and reusable UI components using Bootstrap 5, semantic HTML5, and utility CSS3 layout templates.',
        'Developed complex dynamic forms with real-time multi-variable validation checks using Angular Reactive Forms.',
        'Implemented core data operations (CRUD), including advanced search queries, multi-filter panels, table sorting, and dynamic server/client-side pagination.',
        'Identified and resolved production bugs, conducted comprehensive performance optimizations, and reduced Angular bundle compile sizes.',
        'Collaborated closely with backend engineers and QA specialists within agile sprints to ship clean, tested, and reliable software features.',
        'Managed active code repositories using Git for clean branching, code reviews, and automated integration flows.'
      ],
      projects: [
        'Vendor Management System (VMS)',
        'Productivity Tracker',
        'Health Camp Management System',
        'Task Management System',
        'Hotel Plus (Hotel Management)'
      ],
      techStack: [
        'Angular 21', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5',
        'Node.js', 'Fastify', 'SQL', 'REST API', 'Git', 'GitHub'
      ]
    }
  ];
}
