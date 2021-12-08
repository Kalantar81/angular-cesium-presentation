import { Component, ElementRef, OnInit } from '@angular/core';
import { Viewer } from 'cesium';

@Component({
  selector: 'app-two-d-map',
  templateUrl: './two-d-map.component.html',
  styleUrls: ['./two-d-map.component.scss'],
})
export class TwoDMapComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const viewer1 = new Viewer(this.el.nativeElement, {
      fullscreenButton: true,
    });
  }
}
