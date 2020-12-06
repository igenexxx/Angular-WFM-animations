import { Component } from '@angular/core';
import {animate, group, keyframes, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('box', [
      state('start', style({ background: 'blue' })),
      state('end', style( {
        background: 'red',
        transform: 'scale(1.2)',
      })),
      state('special', style({
        background: 'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%',
      })),
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        group([
          query('h4', animate(450, style({
            fontSize: '.5rem'
          }))),
          style({ background: 'green'}),
          animate('1s', style({
            background: 'pink'
          })),
          animate(750),
        ]),
      ]),
      transition(':enter', [
        animate('4s', keyframes([
          style({ background: 'red', offset: 0 }),
          style({ background: 'green', offset: 0.2 }),
          style({ background: 'purple', offset: 0.3 }),
          style({ background: 'blue', offset: 1 }),
        ]))
        // style({ opacity: 0 }),
        // animate('850ms ease-out')
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        group([
          animate(750, style({
            opacity: 0,
            transform: 'scale(1.2)'
          })),
          animate(300, style({
            fontWeight: 'bold',
            color: 'black'
          }))
        ]),
      ])
    ])
  ]
})
export class AppComponent {
  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  }

  animationStarted($event: AnimationEvent) {
    console.log('Animation started', $event);
  }

  animationDone($event: any) {
    console.log('Animation done', $event);
  }
}
