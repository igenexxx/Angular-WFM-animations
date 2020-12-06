import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {bounce, bounceOutUp} from 'ng-animate';

@Component({
  selector: 'app-animate',
  template: `
    <button (click)="visible = !visible">Toggle</button>
    <hr>
    <div *ngIf="visible" class="rect" [@bounce]></div>
  `,
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounce)),
      transition('* => void', useAnimation(bounceOutUp, {
        delay: 1000,
        params: {
          timing: 3,
        }
      })),
    ])
  ]
})
export class AnimateComponent implements OnInit {
  visible = true;

  constructor() { }

  ngOnInit() {
  }

}
