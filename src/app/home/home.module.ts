import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { LoaderButtonComponent } from './loader-button/loader-button.component';
import { PicturesBodyComponent } from './pictures-body/pictures-body.component';
import { PictureCardComponent } from './pictures-body/components/picture-card/picture-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoaderButtonComponent,
    PicturesBodyComponent,
    PictureCardComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class HomeModule { }
