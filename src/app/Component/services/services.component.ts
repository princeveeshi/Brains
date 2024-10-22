import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {

  
  isScrollUpVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the button when scrolled down 300px or more
    this.isScrollUpVisible = window.pageYOffset > 300;
  }

  // Scroll to the top of the page when the button is clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } 
  services = [
    {
      title: 'Desktop Apps',
      description: 'We develop exceptional desktop applications customized to meet your specific needs and enhance productivity.',
      iconClass: 'fa fa-desktop'
    },
    {
      title: 'Web Apps',
      description: 'We design and develop innovative websites and web applications that elevate your online presence.',
      iconClass: 'fa fa-mobile'
    },
    {
      title: 'IT Infra Solutions',
      description: 'We provide comprehensive hardware and networking solutions to optimize your IT infrastructure and efficiency.',
      iconClass: 'fa fa-building'
    },
    {
      title: 'Hosting Services',
      description: 'Our professional hosting services ensure your online presence is secure, reliable, and easily accessible.',
      iconClass: 'fa fa-server'
    },
    {
      title: 'Security Solutions',
      description: 'We provide skilled employee outsourcing services to effectively meet your business needs and enhance productivity.',
      iconClass: 'fa fa-shield'
    },
    {
      title: 'Staffing Solutions',
      description: 'We offer outsourcing services for skilled employees to fulfill your business needs effectively and efficiently.',
      iconClass: 'fa fa-users'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
