import { Component, OnInit, Input } from '@angular/core';
import { BrandAnimation } from './brand.animation';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  animations: BrandAnimation
})
export class BrandComponent implements OnInit {
  @Input() type:string = '';

  constructor() { }

  ngOnInit() {
  }

}
