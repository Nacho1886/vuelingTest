import { Component } from '@angular/core';

import { UnsplashApiService } from '../services/unsplash-api.service';

@Component({
  selector: 'app-loader-button',
  templateUrl: './loader-button.component.html'
})
export class LoaderButtonComponent {
  constructor(public unsplashApiService: UnsplashApiService) {}
}
