import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:9090/api/category';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}`).pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of([]);
      })
    );
  }

  getCategoryById(id: string): Observable<Category | undefined> {
    return this.http.get<Category | undefined>(`${this.apiUrl}/${id}`).pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of(undefined);
      })
    );
  }

  createCategory(category: Category, imageFile: FormData): Observable<Category | undefined> {
    const formData = new FormData();
    formData.append('category', JSON.stringify(category));

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

  updateCategory(id: string, category: Category, imageFile: FormData | null): Observable<null> {
    const formData = new FormData();
    formData.append('categoryJson', JSON.stringify(category));

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

  deleteCategory(id: number): Observable<null> {
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
