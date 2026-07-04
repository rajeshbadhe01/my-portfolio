import { Component, HostListener, signal, AfterViewInit, OnInit, Inject, PLATFORM_ID, effect } from '@angular/core';
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
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Portfolio';
  currentYear = new Date().getFullYear();
  isDarkMode = signal<boolean>(true);
  isLoading = signal<boolean>(true);
  preloaderFadeOut = signal<boolean>(false);
  preloaderDestroyed = signal<boolean>(false);
  loadingPercent = signal<number>(0);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkMode.set(savedTheme === 'dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkMode.set(prefersDark);
      }
      this.updateThemeClass();
    }
    this.runPreloader();
  }

  runPreloader() {
    if (isPlatformBrowser(this.platformId)) {
      const interval = setInterval(() => {
        const current = this.loadingPercent();
        if (current >= 100) {
          clearInterval(interval);
          this.preloaderFadeOut.set(true);
          setTimeout(() => {
            this.preloaderDestroyed.set(true);
            this.isLoading.set(false);
          }, 700); // 700ms matches CSS transition-all duration-700
        } else {
          // Organically increment the loading progress at a slightly slower pace
          const next = Math.min(100, current + Math.floor(Math.random() * 4) + 2);
          this.loadingPercent.set(next);
        }
      }, 85);
    } else {
      this.loadingPercent.set(100);
      this.preloaderFadeOut.set(true);
      this.preloaderDestroyed.set(true);
      this.isLoading.set(false);
    }
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
      this.updateThemeClass();
    }
  }

  updateThemeClass() {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      if (this.isDarkMode()) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        
        // 1. Immediately flag any elements already inside the viewport as visible
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
          if (isInViewport) {
            el.classList.add('is-visible');
          }
        });

        // 2. Mark body as js-ready, which safely hides only the off-screen elements
        document.body.classList.add('js-ready');

        // 3. Set up the observer for the remaining offscreen elements with a low threshold for mobile safety
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.01
        });

        elements.forEach((el) => {
          if (!el.classList.contains('is-visible')) {
            observer.observe(el);
          }
        });
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

  getHighlightedSection(): string {
    const current = this.activeSection();
    if (current === 'home') return 'home';
    if (current === 'about') return 'about';
    if (current === 'skills') return 'skills';
    if (current === 'experience') return 'experience';
    if (current === 'projects' || current === 'education' || current === 'certifications' || current === 'resume') return 'projects';
    if (current === 'contact') return 'contact';
    return 'home';
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
