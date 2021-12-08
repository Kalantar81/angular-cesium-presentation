import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  CallbackProperty,
  Cartesian3,
  Cesium3DTileset,
  Cesium3DTileStyle,
  ClassificationType,
  Color,
  createOsmBuildings,
  createWorldTerrain,
  Ellipsoid,
  HeadingPitchRange,
  IonResource,
  JulianDate,
  Matrix4,
  PolygonHierarchy,
  PolylineOutlineMaterialProperty,
  ScreenSpaceEventHandler,
  Viewer,
} from 'cesium';

@Component({
  selector: 'app-three-d-map',
  templateUrl: './three-d-map.component.html',
  styleUrls: ['./three-d-map.component.scss'],
})
export class ThreeDMapComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const viewer = new Viewer(this.el.nativeElement, {
      selectionIndicator: false,
      infoBox: false,
      terrainProvider: createWorldTerrain(),
    });
  }
}
