import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as screenfull from 'screenfull';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'stbui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() customizer;
  @Output() onToggleSidenav = new EventEmitter<boolean>();

  isFullscreen: boolean = false;
  showLoading: boolean;
  isSidenavOpen: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.showLoading = false;
      }
    });
  }

  ngOnInit() {
  }

  toggleFullscreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.onToggleSidenav.emit(this.isSidenavOpen);
  }

}
