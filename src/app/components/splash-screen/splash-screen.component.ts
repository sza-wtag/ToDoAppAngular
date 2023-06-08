import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit  {
  windowWidth: string;
  showSplash: boolean = true;

  constructor(){}
  ngOnInit(): void {
    setTimeout (() => {
      this.windowWidth = '-' + window.innerWidth + 'px';
    },2000);
  }

}
