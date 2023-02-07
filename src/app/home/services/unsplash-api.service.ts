import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { PictureData } from '../interfaces/picture-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UnsplashApiService {

  private _randomArray$: Subject<PictureData[]> = new Subject()

  constructor(private http: HttpClient) {}


  getPageUnsplash(): void {
    this._randomArray$.next([])
    this.http.get<PictureData[]>(`${environment.URL_API_UNSPLASH}random?count=12`, environment.OPTIONS_API_UNSPLASH).subscribe(array => this._randomArray$.next(array));
  }

  getArrayPictures(): Observable<PictureData[]> {
    this.getPageUnsplash()
    return this._randomArray$.asObservable()
  }
}
