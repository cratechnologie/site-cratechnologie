import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:9090/api/article';

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}`).pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of([]);
      })
    );
  }

  getArticleById(id: string): Observable<Article | undefined> {
    return this.http.get<Article | undefined>(`${this.apiUrl}/${id}`).pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of(undefined);
      })
    );
  }

  createArticle(article: Article, imageFile: FormData): Observable<Article | undefined> {
    const formData = new FormData();
    formData.append('article', JSON.stringify(article));

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

  updateArticle(id: string, article: Article, imageFile: FormData | null): Observable<null> {
    const formData = new FormData();
    formData.append('articleJson', JSON.stringify(article));

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

  deleteArticle(id: number): Observable<null> {
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
