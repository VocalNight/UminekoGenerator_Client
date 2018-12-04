import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  bgPath: string = 'http://127.0.0.1:8887/bgresize/';

  constructor(private http: HttpClient) { }

  getBackgrounds(): Observable<any> {
    return this.http.get('//localhost:8080/backgrounds');
  }
}
