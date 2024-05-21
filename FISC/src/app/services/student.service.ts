import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Students } from '../interfaces/students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/students/';
  }

  getListStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
  saveStudent(student: Students): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, student);
  }

  getStudent(id: number): Observable<Students> {
    return this.http.get<Students>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateStudent(id: number, stundent: Students): Observable<void> {
    return this.http.put<void>(
      `${this.myAppUrl}${this.myApiUrl}${id}`,
      stundent
    );
  }
}
