import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class HeroComponent implements OnInit {
  currentSection = 'eins';
  location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    // this.location.
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }
}
