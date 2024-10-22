import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {


  
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
  constructor() { }

  ngOnInit(): void {
  }

}
