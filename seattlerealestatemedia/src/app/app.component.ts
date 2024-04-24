import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seattlerealestatemedia';

  ngOnInit() {
    console.log('Life Cyle Hook with spontaneous response.');
  }
  // tinyAlert() {
  //   Swal.fire('Hey there!');
  // }
  // successNotification() {
  //   Swal.fire('Hi', 'We have been informed!', 'success');
  // }
  // alertConfirmation() {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'This process is irreversible.',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, go ahead.',
  //     cancelButtonText: 'No, let me think',
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire('Removed!', 'Product removed successfully.', 'success');
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire('Cancelled', 'Product still in our database.)', 'error');
  //     }
  //   });
  // }

  scrollTo(element: any): void {
    console.log(element);
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
