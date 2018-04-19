import { NavigationAnimation } from './navigation.animation';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'stbui-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: NavigationAnimation
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() type:string = '';

  navigationModel: any[];
  navigationModelChangeSubscription: Subscription;

  constructor(private service: NavigationService) {
    this.navigationModelChangeSubscription = this.service.onNavigationModelChange.subscribe((navigation) => {
      this.navigationModel = navigation;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.navigationModelChangeSubscription.unsubscribe();
  }

}
