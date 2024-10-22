import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  // Method to show a simple alert
  showAlert(title: string, text: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question' = 'info') {
    return Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: 'Okay'
    });
  }

  // Method to show a confirmation dialog
  showConfirmDialog(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    });
  }

  // Method to show a modal with an iframe
  showMapModal(title: string, mapUrl: string) {
    return Swal.fire({
      html: `
        <div style="text-align: center;">
          <h2>${title}</h2>
          <iframe 
            src="${mapUrl}" 
            width="100%" 
            height="350" 
            style="border: 0;"
            allowfullscreen>
          </iframe>
        </div>
      `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Okay',
      customClass: {
        popup: 'swal-popup' // Optional: Add custom classes for styling
      }
    });
  }
}
