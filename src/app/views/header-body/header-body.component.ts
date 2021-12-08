import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-body',
  templateUrl: './header-body.component.html',
  styleUrls: ['./header-body.component.less'],
})
export class HeaderBodyComponent implements OnInit {
  public screenHeight: number = 0;
  public screenWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight - 25;
    this.screenWidth = window.innerWidth - 15;
  }

  constructor() {
    this.onResize();
  }

  ngOnInit() {}
}
