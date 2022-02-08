import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private url: string = 'Http://127.0.0.1:8010';

  constructor(public http: HttpClient) { }

  fetchData() {
    return this.http.get(`${this.url}/api`).pipe(
      catchError(() => {
        return of(false);
      })
    )
  };

   submitForm(form: NgForm): Observable<boolean | Object> {
    return this.http.post(`${this.url}/register`, form.value, {
      headers: {
        'Content-Type' : 'application/json'
      },
      responseType: 'json',
      observe: 'body'
    })
      .pipe(
        catchError(() => {
          return of(false);
        })
      )
  }
}
