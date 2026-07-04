import { Component, HostListener, signal, AfterViewInit, Inject, PLATFORM_ID, effect } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

// Section Components
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Certifications } from './components/certifications/certifications';
import { Resume } from './components/resume/resume';
import { Contact } from './components/contact/contact';

interface NavItem {
  label: string;
  id: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Home,
    About,
    Skills,
    Experience,
    Projects,
    Education,
    Certifications,
    Resume,
    Contact
  ],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';
  currentYear = new Date().getFullYear();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Scroll active mobile nav item into view when it changes
    effect(() => {
      const activeId = this.activeSection();
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          const activeEl = document.getElementById('mob-nav-' + activeId);
          const navContainer = document.getElementById('mobile-bottom-nav');
          if (activeEl && navContainer) {
            const containerWidth = navContainer.clientWidth;
            const elementLeft = activeEl.offsetLeft;
            const elementWidth = activeEl.clientWidth;
            const scrollLeftPos = elementLeft - (containerWidth / 2) + (elementWidth / 2);
            
            navContainer.scrollTo({
              left: scrollLeftPos,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        }, {
          threshold: 0.05,
          rootMargin: '0px 0px -50px 0px'
        });

        const elements = document.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));
      }, 150);
    }
  }
  
  navItems: NavItem[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Tech Stack', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ];

  activeSection = signal<string>('home');
  mobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let currentSection = 'home';
    const threshold = 180; // pixels from the top of viewport to detect active section

    for (const item of this.navItems) {
      const element = document.getElementById(item.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom >= threshold) {
          currentSection = item.id;
          break;
        }
      }
    }
    this.activeSection.set(currentSection);
  }

  scrollToSection(id: string) {
    this.closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const outer = document.getElementById('custom-cursor-outer');
    const inner = document.getElementById('custom-cursor-inner');
    if (outer && inner) {
      inner.style.left = `${event.clientX}px`;
      inner.style.top = `${event.clientY}px`;
      outer.style.left = `${event.clientX}px`;
      outer.style.top = `${event.clientY}px`;

      // Fade in if cursor is currently hidden (e.g. initial load)
      if (outer.style.opacity === '0') {
        outer.style.opacity = '1';
        inner.style.opacity = '1';
      }

      const target = event.target as HTMLElement;
      const isHoveringInteractive = target.closest('a, button, input, textarea, [role="button"], .hover-trigger');
      
      if (isHoveringInteractive) {
        outer.classList.add('scale-150', 'bg-indigo-500/20', 'border-indigo-400');
        inner.classList.add('scale-50', 'bg-indigo-300');
      } else {
        outer.classList.remove('scale-150', 'bg-indigo-500/20', 'border-indigo-400');
        inner.classList.remove('scale-50', 'bg-indigo-300');
      }
    }
  }

  @HostListener('window:mouseout', ['$event'])
  onMouseLeave(event: MouseEvent) {
    const outer = document.getElementById('custom-cursor-outer');
    const inner = document.getElementById('custom-cursor-inner');
    if (outer && inner) {
      if (!event.relatedTarget || event.clientY <= 0 || event.clientX <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight) {
        outer.style.opacity = '0';
        inner.style.opacity = '0';
      }
    }
  }

  @HostListener('window:mouseover', ['$event'])
  onMouseEnter(event: MouseEvent) {
    const outer = document.getElementById('custom-cursor-outer');
    const inner = document.getElementById('custom-cursor-inner');
    if (outer && inner) {
      outer.style.opacity = '1';
      inner.style.opacity = '1';
    }
  }
}
