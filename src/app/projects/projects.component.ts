import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Sunbird RC',
      logo: '../assets/sunbirdRC_logo.png',
      description:
        'The Sunbird RC is an open sourced framework to enable organizations to rapidly build next generation eelectronic registries and Verifiable Crendentials. Sunbird RC uses a set of configurations, automatically generate CRUD APIs without any coding, issue and manage verifiable credentials, manage user consent flows if required, manage attestation and verification flows, etc.',
      technologies:
        'Angular, TypeScript, Bootstrap, ngx-formly, formio-builder',
      siteLink: 'https://rc.sunbird.org/',
      visit: 'Visit Documentation',
    },
    {
      name: 'Organ Donation Registry',
      logo: '../assets/notto.jpg',
      description:
        'The Organ Donation Registry is build with Sunbird RC and it is also the one of the usecases of SBRC . It a confidential electronic database in which individuals can enter and store their wish to be an organ and tissue donor. Users can get te certificate of their Plegde of organ donation issued by Government of India. All pledges are registered with the National Organ & Tissue Transplant Organisation (NOTTO).',
      technologies: 'Angular, TypeScript, Bootstrap',
      siteLink: 'https://notto.abdm.gov.in/',
      visit: 'Visit Website',
    },
    {
      name: 'HaqDarshak',
      logo: '../assets/haqdarshak.png',
      description:
        'Haqdarshak a mobile app and web platform  which connects low-income Indians with the government welfare benefits they are eligible for: from disability pensions to crop insurance to education subsidies. With this app, citizens can register themselves, check eligibilities for various welfare schemes, apply to schemes. also get in touch with haqdarshak agent.',
      technologies:
        ' Reactjs, TypeScript, Chakra UI, Reverse Geocoding, Google Analytics',
      siteLink:
        'https://play.google.com/store/apps/details?id=com.haqdarshak.jana&hl=en_IN',
      visit: 'Visit Playstore',
    },
    {
      name: 'Pratham SCP',
      logo: '../assets/Pratham.png',
      description:
        'Pratham aims to target problems with pre-primary and primary education in India. Over time it has created large-scale, low-cost educational programs that have helped Pratham grow from a one-city preschool program into a national organization with international influence.',
      technologies: 'Nextjs, TypeScript, Material UI, RJSF, Zustand',
      siteLink: 'https://teacher.prathamdigital.org/',
      visit: 'Visit Website',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
