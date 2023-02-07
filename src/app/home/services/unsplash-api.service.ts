import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { PictureData } from '../interfaces/picture-data';

@Injectable({
  providedIn: 'root',
})
export class UnsplashApiService {

  private _apiUrl:string = 'https://api.unsplash.com/photos/';

  private _options: object = {
    headers: {
      Authorization: 'Client-ID KfHoL6jNCXagd2FKrfo5LECINgGoAupSjzzhKc3P-i8',
    },
  };

  private _randomArray$: Subject<PictureData[]> = new Subject()

  constructor(private http: HttpClient) {}


  getPageUnsplash(): void {
    this._randomArray$.next([])
    this.http.get<PictureData[]>(`${this._apiUrl}random?count=12`, this._options).subscribe(array => this._randomArray$.next(array));
  }

  getArrayPictures(): Observable<PictureData[]> {
    this.getPageUnsplash()
    return this._randomArray$.asObservable()
  }
}
