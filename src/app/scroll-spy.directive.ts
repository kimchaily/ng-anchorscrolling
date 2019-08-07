import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
  @Input() public spiedTags = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(
    private el: ElementRef,
    private router: Router
    ) {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    console.log('event', event);
    let currentSection: string;
    const children = this.el.nativeElement.children;
    const scrollTop = event.target.scrollingElement.scrollTop;
    const parentOffset = 0;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        console.group();
        console.log('element.offsetTop', element.offsetTop);
        console.log('element.parentOffset', element.parentOffset);
        console.log('scrollTop', scrollTop);
        console.groupEnd();
        if ((element.offsetTop - parentOffset) <= scrollTop) {
          console.log('element', element);
          currentSection = element.id;
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      console.log('currentSection', currentSection);
      // this.router.onSameUrlNavigation = 'ignore';
      // this.router.navigate([], {fragment: currentSection, });
      this.sectionChange.emit(this.currentSection);
    }
  }

}
