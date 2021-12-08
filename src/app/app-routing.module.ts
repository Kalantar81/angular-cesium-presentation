import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeDMapComponent } from './components/three-d-map/three-d-map.component';
import { TwoDMapComponent } from './components/two-d-map/two-d-map.component';

const routes: Routes = [
  { path: '', redirectTo: 'threeDmap', pathMatch: 'full' },
  { path: 'threeDmap', component: ThreeDMapComponent },
  { path: 'twoDmap', component: TwoDMapComponent },
  { path: '**', component: TwoDMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
