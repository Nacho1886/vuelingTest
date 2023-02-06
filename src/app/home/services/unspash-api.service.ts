import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PictureData } from '../interfaces/picture-data';

@Injectable({
  providedIn: 'root',
})
export class UnspashApiService {

  apiUrl:string = 'https://api.unsplash.com/photos/';

  options: object = {
    headers: {
      Authorization: 'Client-ID KfHoL6jNCXagd2FKrfo5LECINgGoAupSjzzhKc3P-i8',
    },
  };

  constructor(private http: HttpClient) {}


  getPageUnsplash(): Observable<PictureData[]> {
    return this.http.get<PictureData[]>(`${this.apiUrl}random?count=12`, this.options);
  }
}
