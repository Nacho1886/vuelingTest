import { Component } from '@angular/core';
import { UnsplashApiService } from '../services/unsplash-api.service';

@Component({
  selector: 'app-loader-button',
  templateUrl: './loader-button.component.html',
  styleUrls: ['./loader-button.component.scss']
})
export class LoaderButtonComponent {
  constructor(public unsplashApiService: UnsplashApiService) {}
}
