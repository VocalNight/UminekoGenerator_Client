import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  bgPath = 'http://127.0.0.1:8887/bgresize/';
  charPath = 'http://127.0.0.1:8887/sprites/charchooser2/';
  spritePath: string;

  constructor(private http: HttpClient) { }

  getBackgrounds(): Observable<any> {
    return this.http.get('//localhost:8080/backgrounds');
  }

  getChars(): Observable<any> {
    return this.http.get('//localhost:8080/sprites/charchooser');
  }

  getSprites(char: string): Observable<any> {
    this.spritePath = 'http://127.0.0.1:8887/sprites/' + char + '/';
    return this.http.get('//localhost:8080/sprites?name=' + char);
  }



}
