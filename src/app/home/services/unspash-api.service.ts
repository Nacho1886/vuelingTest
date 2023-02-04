import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureData } from '../interfaces/picture-data';

@Injectable({
  providedIn: 'root'
})
export class UnspashApiService {

  constructor(private http: HttpClient) {
    
  }
  getPageUnsplash(): Observable<PictureData[]> {

    const randomNumber = Math.round(Math.random() * 400)
    const options = {
      headers: {
        Authorization: 'Client-ID KfHoL6jNCXagd2FKrfo5LECINgGoAupSjzzhKc3P-i8'
      }
    }

    return this.http.get<PictureData[]>(`https://api.unsplash.com/photos?page=${randomNumber}`, options)
  }
}
