import { query, style, animate, group } from '@angular/animations';

export const ANIMATION_LEFT = [
  query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ left: '-100%' }), animate('.3s ease-out', style({ left: '0' }))], {
      optional: true,
    }),
    query(':leave', [style({ left: '0' }), animate('.3s ease-out', style({ left: '100%' }))], {
      optional: true,
    }),
  ]),
];

export const ANIMATION_RIGHT = [
  query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ left: '100%' }), animate('.3s ease-out', style({ left: '0' }))], {
      optional: true,
    }),
    query(':leave', [style({ left: '0' }), animate('.3s ease-out', style({ left: '-100%' }))], {
      optional: true,
    }),
  ]),
];
