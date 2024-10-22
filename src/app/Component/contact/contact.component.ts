import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactInfoService } from 'src/app/Service/ContactInfo/contact-info.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  email!: string;
  phoneNo!: string;
  contactForm: FormGroup;
  
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
  services: string[] = ['Service 1', 'Service 2', 'Service 3'];

  constructor(private fb: FormBuilder,
    private contactInfoService: ContactInfoService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]], // E.164 format for phone numbers
      service: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.email = this.contactInfoService.email;
    this.phoneNo = this.contactInfoService.phoneNo
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission logic, such as sending the data to a server
      alert('Form Submitted!');
    } else {
      alert('Please fill in all the fields.');
    }
  }

}
