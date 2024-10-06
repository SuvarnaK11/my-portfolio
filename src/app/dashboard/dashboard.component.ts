import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  letters: string[] = [
    'H',
    'e',
    'y',
    '\u00A0', // \u00A0 represents a non-breaking space
    't',
    'h',
    'e',
    'r',
    'e',
    '\u00A0',
    '!',
    '\u00A0',
    'I',
    "'",
    'm',
    '\u00A0',
    'S',
    'u',
    'v',
    'a',
    'r',
    'n',
    'a',
  ];

  constructor() {}

  ngOnInit(): void {}
}
