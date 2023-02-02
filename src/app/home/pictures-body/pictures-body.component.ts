import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UnspashApiService } from '../services/unspash-api.service';

@Component({
  selector: 'app-pictures-body',
  templateUrl: './pictures-body.component.html',
  styleUrls: ['./pictures-body.component.scss']
})
export class PicturesBodyComponent implements OnInit {
  
  constructor(private unsplashService: UnspashApiService) {}
  
  ngOnInit(): void {
    this.unsplashService.getPageUnsplash().subscribe(obs => console.log(obs))
  }
}
