import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Places } from '../interfaces/places';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/places/';
  }
  getListPlaces(): Observable<Places[]> {
    return this.http.get<Places[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
