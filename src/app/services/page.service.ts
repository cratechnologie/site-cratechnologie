import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private apiUrl = 'http://localhost:9090/api/page'; // Mise à jour de l'URL de base

  constructor(private http: HttpClient) { }

  getAllPages(): Observable<Page[]> {
    return this.http.get<Page[]>(`${this.apiUrl}`).pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of([]);
      })
    );
  }

  getPageById(id: string): Observable<Page | undefined> {
    return this.http.get<Page | undefined>(`${this.apiUrl}/${id}`).pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of(undefined);
      })
    );
  }

  createPage(page: Page, imageFile: FormData): Observable<Page | undefined> {
    const formData = new FormData();
    formData.append('page', JSON.stringify(page));

    // Ajoutez l'image au formulaire si elle existe
    if (imageFile) {
      imageFile.forEach((value, key) => {
        formData.append(key, value);
      });
    }

    return this.http.post(`${this.apiUrl}`, formData).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }


  updatePage(id: string, page: Page, imageFile: FormData | null): Observable<null> {
    const formData = new FormData();
    formData.append('pageJson', JSON.stringify(page));

    if (imageFile) {
      imageFile.forEach((value, key) => {
        formData.append(key, value);
      });
    }

    return this.http.put(`${this.apiUrl}/${id}`, formData).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePage(id: number): Observable<null> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
