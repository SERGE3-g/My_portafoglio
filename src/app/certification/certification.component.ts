import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {

  certifications = [
    { name: 'Certification 1', organization: 'Organization 1', date: 'January 1, 2022' },
    { name: 'Certification 2', organization: 'Organization 2', date: 'February 1, 2022' },
    { name: 'Certification 3', organization: 'Organization 3', date: 'March 1, 2022' },
    { name: 'Certification 4', organization: 'Organization 4', date: 'April 1, 2022' },
    { name: 'Certification 5', organization: 'Organization 5', date: 'May 1, 2022' }
  ];

}
