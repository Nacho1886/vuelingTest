import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { UnsplashApiService } from '../services/unsplash-api.service';
import { PictureData } from '../interfaces/picture-data';

@Component({
  selector: 'app-pictures-body',
  templateUrl: './pictures-body.component.html',
  styleUrls: ['./pictures-body.component.scss']
})
export class PicturesBodyComponent implements OnInit {

  pictureArray: PictureData[] = []
  
  constructor(private unsplashService: UnsplashApiService) {}
  
  ngOnInit(): void {
    this.unsplashService.getArrayPictures().subscribe(obs => this.pictureArray = obs)
  }
}
