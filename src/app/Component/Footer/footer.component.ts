import { Component } from '@angular/core';
import { ContactInfoService } from 'src/app/Service/ContactInfo/contact-info.service';
import { SweetAlertService } from 'src/app/Service/SweetAlert/sweetAlert.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class InfoSectionComponent {
  email!: string;
  uEmail:string = "";
  phoneNo!: string;
  currentYear: number;


  constructor(private contactInfoService: ContactInfoService,
    private sweetAlertService: SweetAlertService
  ) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.email = this.contactInfoService.email;
    this.phoneNo = this.contactInfoService.phoneNo
  }
  onSubscribe() {
    if (this.uEmail) {
      console.log('Subscribed with email:', this.uEmail);
      // Implement actual subscription logic, e.g., calling an API
      alert(`Subscribed successfully with email: ${this.uEmail}`);
    }
  }

  showMap() {
   
    const mapUrl = 'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed';
    this.sweetAlertService.showMapModal('Office Location', mapUrl);
  }

}
