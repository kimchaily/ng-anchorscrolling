import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-subzero',
  template: `
    <p>
      subzero works!
    </p>
  `,
  styleUrls: ['./subzero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubzeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
