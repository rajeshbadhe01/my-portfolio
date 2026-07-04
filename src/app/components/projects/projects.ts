import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  role: string;
  description: string;
  overview: string;
  keyFeatures: string[];
  technologies: string[];
  responsibilities: string[];
  challengesSolved: string;
  businessImpact: string;
  imageColor: string;
  liveLink?: string;
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  selectedProject = signal<Project | null>(null);

  projects: Project[] = [
    {
      title: 'Vendor Management System (VMS)',
      role: 'Angular Frontend Developer',
      description: 'An enterprise-grade platform built to streamline the onboarding, workflow configuration, candidate sourcing, invoicing, and reporting operations for corporate vendors.',
      overview: 'Vendor Management System (VMS) is a complete enterprise application designed to manage corporate vendor workflows. The system replaces manual spreadsheets with a secure, automated web platform that controls vendor registration, candidate onboarding, sourcing, dynamic approvals, invoice generation, and audit compliance logs.',
      keyFeatures: [
        'Vendor Onboarding & Lifecycle Sourcing Management',
        'Complex Dynamic Workflow Approval Configuration Engine',
        'Invoice Tracking, Processing, and Billing Pipelines',
        'Robust Search & Multi-Variable Filter System with dynamic pagination',
        'Interactive Analytics Dashboard with detailed audit logs'
      ],
      technologies: ['Angular 21', 'TypeScript', 'Bootstrap 5', 'RxJS', 'REST APIs', 'Node.js', 'Fastify', 'SQL', 'Git', 'GitHub'],
      responsibilities: [
        'Developed responsive modular UI layouts in Angular 21 using Bootstrap 5 grid systems.',
        'Engineered dynamic forms and complex nested data inputs using Angular Reactive Forms.',
        'Integrated asynchronous API calls, pagination, and multi-variable filtering using RxJS pipelines.',
        'Secured state rendering and credentials verification with JWT authentication systems.',
        'Built automated unit testing components and optimized browser bundle sizes for faster loads.'
      ],
      challengesSolved: 'Managing large datasets of candidates and vendor profiles originally created severe page-load latency. I solved this by implementing custom client-side pagination, lazy-loading sub-modules, and optimization of RxJS subscription streams, reducing page render times by 45%. Additionally, configured multi-nested reactive form arrays that resolved data-loss issues across multi-step wizard screens.',
      businessImpact: 'Onboarding automation cut vendor processing times by 35%, and candidate sourcing efficiency increased by 20% due to real-time status visibility.',
      imageColor: 'from-indigo-650 to-indigo-900',
      githubLink: 'https://github.com'
    },
    {
      title: 'Productivity Tracker',
      role: 'Angular Frontend Developer',
      description: 'A performance and work-monitoring application enabling organizations to log daily tasks, track attendance, and analyze employee metrics through real-time dashboards.',
      overview: 'A web-based productivity tracking application designed to help organizations monitor employee output. The app allows users to log daily tasks, register attendance, request holidays, and view personal performance scores, while providing management with interactive visual dashboards and performance analytics.',
      keyFeatures: [
        'Personal and Manager Dashboards with interactive KPI widgets',
        'Daily Work Log Entry & Activity Tracking module',
        'Attendance tracking and clock-in/out logging systems',
        'Automated report compilation and performance chart generation'
      ],
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'RxJS', 'Chart.js', 'Node.js', 'Fastify', 'SQL Database'],
      responsibilities: [
        'Developed the complete frontend architecture in Angular and structured reusable modules.',
        'Integrated Chart.js inside Angular components to render real-time team productivity metrics.',
        'Built secure CRUD forms for task inputs, work reports, and manager feedback loops.',
        'Integrated RESTful APIs with Fastify backend services.'
      ],
      challengesSolved: 'Multiple rendering calls caused productivity charts to blink and draw duplicate states when switching sections. I resolved this by wrapping Chart.js initialization in specific Angular lifecycle hooks and managing canvas state updates using active signals.',
      businessImpact: 'Improved overall organizational accountability and transparency, which led to a 15% increase in task completion rates.',
      imageColor: 'from-purple-650 to-purple-900',
      githubLink: 'https://github.com'
    },
    {
      title: 'Health Camp Management System',
      role: 'Frontend Software Developer',
      description: 'A healthcare coordination application used to pre-register patients, arrange doctor schedules, coordinate appointments, and manage medical reports during health camps.',
      overview: 'A specialized healthcare application built to facilitate camp coordination. The system handles offline/online patient registration, appointment scheduling, doctor specialization matching, and patient medical record uploads, improving healthcare delivery in temporary camps.',
      keyFeatures: [
        'Patient Pre-Registration & Intake Form handling',
        'Doctor Specialization matching & automated slot booking',
        'Centralized dashboard for real-time camp tracking',
        'Medical history summaries & PDF report downloads'
      ],
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'RxJS', 'Node.js', 'Fastify', 'SQL'],
      responsibilities: [
        'Designed patient intake and doctor availability forms with strict validation schemes.',
        'Implemented dynamic grid tables for searching and sorting camper registries.',
        'Integrated appointment slot assignment API and handled async API error scenarios.'
      ],
      challengesSolved: 'Intake forms in remote camps faced data entry errors due to multi-lingual inputs and copy-paste anomalies. I built custom validation directives and input sanitizers, cutting invalid form submissions by 90%.',
      businessImpact: 'Reduced on-site patient intake queue times by 40% due to pre-registration availability and automated doctor assignment.',
      imageColor: 'from-pink-650 to-pink-900',
      githubLink: 'https://github.com'
    },
    {
      title: 'Task Management System',
      role: 'Frontend Developer',
      description: 'A collaborative team board workspace where administrators can create projects, assign tasks to members, map deadlines, and view status notifications.',
      overview: 'A collaborative project management workspace enabling teams to organize tasks. Featuring boards, status columns, role-based controls, and task assignments, it enables users to monitor project velocity, deadliness, and team priorities in real time.',
      keyFeatures: [
        'Task CRUD Management (Create, Read, Update, Delete) with priority flags',
        'Role-Based Access Control restricting views per user type',
        'Real-time task deadline notifications and status alert widgets',
        'Interactive team activity logs and analytics panels'
      ],
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'RxJS', 'Node.js', 'Fastify', 'SQL'],
      responsibilities: [
        'Built secure client-side routing guards and access control logic for dashboards.',
        'Developed reusable sidebar notification alerts and project summary components.',
        'Integrated live update events with REST API structures using RxJS state variables.'
      ],
      challengesSolved: 'Unauthorized users were able to manipulate API payloads to override task assignments. I restructured client-side routing guards to verify permissions at component levels before loading data arrays.',
      businessImpact: 'Reduced project delay risks by 25% due to immediate deadline notifications and transparent task ownership.',
      imageColor: 'from-emerald-650 to-emerald-900',
      githubLink: 'https://github.com'
    },
    {
      title: 'Enterprise Resource Planning (ERP)',
      role: 'Angular Frontend Developer',
      description: 'An integrated cloud ERP application designed to manage core business workflows, including inventory control, payroll processing, and financial summaries.',
      overview: 'An integrated cloud ERP application built to manage core business workflows. Replacing fragmented sub-systems with a single dashboard, it consolidates asset tracking, employee payroll ledgers, stock movements, and financial statements in one place.',
      keyFeatures: [
        'Unified Asset Inventory & Stock Sourcing trackers',
        'Employee Payroll ledger calculations & Leave tracker',
        'Automated Ledger postings & Invoice creation module',
        'Advanced financial grid sorting with PDF report generators'
      ],
      technologies: ['Angular 21', 'TypeScript', 'Bootstrap 5', 'RxJS', 'REST APIs', 'Node.js', 'Fastify', 'SQL', 'Git'],
      responsibilities: [
        'Developed responsive modules for asset allocation, employee profiles, and ledger sheets.',
        'Formulated multi-nested reactive forms to handle complex stock transactions safely.',
        'Implemented filter pipelines to extract monthly transaction reports and statement cards.',
        'Optimized data grid modules to export summaries directly to Excel and PDF formats.'
      ],
      challengesSolved: 'Real-time inventory changes clashed when different admins updated stocks simultaneously. I resolved this by subscribing to state broadcasts and using RxJS interval checking and optimistic UI updates to prevent overlapping database errors.',
      businessImpact: 'Administrative workflow automation cut reporting cycles by 50% and saved 15% in resource allocation due to automated purchase order flows.',
      imageColor: 'from-blue-650 to-blue-900',
      githubLink: 'https://github.com'
    },
    {
      title: 'Hotel Plus (Hotel Management)',
      role: 'Angular Frontend Developer',
      description: 'A comprehensive property management platform built to coordinate room reservations, guest check-in/out registers, billing transactions, and housekeeping schedules.',
      overview: 'Hotel Plus is a high-end property and guest management system designed to streamline hotel operations. The application automates patient room bookings, billing invoice generation, check-in registrations, housekeeping room status updates, and kitchen food/room service orders under a unified web console.',
      keyFeatures: [
        'Interactive Room Booking Calendar & Sorter interface',
        'Automated Check-in/out registration with real-time billing calculations',
        'Staff Housekeeping rooms checklist and availability scheduler',
        'Comprehensive financial reports with automated invoice downloads'
      ],
      technologies: ['Angular', 'TypeScript', 'Bootstrap 5', 'RxJS', 'Node.js', 'Fastify', 'SQL Database', 'Git'],
      responsibilities: [
        'Developed the reservation calendar interface and booking wizard forms with reactive validation controls.',
        'Built real-time status tracking dashboards for room availability status and room cleaning schedules.',
        'Integrated Fastify REST API endpoints for customer billing invoices and payment logging systems.'
      ],
      challengesSolved: 'Double-booking errors occurred when multiple front-desk managers tried to book the same room simultaneously. I resolved this by adding dynamic room availability checks and real-time state alerts using RxJS pipeline operations.',
      businessImpact: 'Improved room booking processing speed by 35% and eliminated double-booking reservation errors completely, resulting in better guest satisfaction ratings.',
      imageColor: 'from-rose-650 to-rose-900',
      githubLink: 'https://github.com'
    }
  ];

  openProjectDetails(project: Project) {
    this.selectedProject.set(project);
  }

  closeProjectDetails() {
    this.selectedProject.set(null);
  }
}
