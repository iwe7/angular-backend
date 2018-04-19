import { trigger, state, style, animate, transition } from '@angular/animations';

export const BrandAnimation = [
    trigger('brandToggle', [
        state('integrated', style({
          width: '250px'
        })),
        state('abbreviated', style({
          width: '90px'
        })),
        transition('integrated <=> abbreviated', animate('300ms ease'))
      ])
];