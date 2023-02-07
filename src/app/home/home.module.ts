import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { LoaderButtonComponent } from './loader-button/loader-button.component';
import { PicturesBodyComponent } from './pictures-body/pictures-body.component';
import { PictureCardComponent } from './pictures-body/components/picture-card/picture-card.component';
import { SharedModule } from '../shared/shared.module';
import { ClassDistributorDirective } from './directives/class-distributor.directive';


@NgModule({
  declarations: [
    HomeComponent,
    LoaderButtonComponent,
    PicturesBodyComponent,
    PictureCardComponent,
    ClassDistributorDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
