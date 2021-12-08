import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { HeaderComponent } from './view-parts/header/header.component';
import { BodyComponent } from './view-parts/body/body.component';
import { FooterComponent } from './view-parts/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderBodyComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  exports: [HeaderBodyComponent],
})
export class ViewsModule {}
