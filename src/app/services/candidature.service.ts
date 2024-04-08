import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Candidature } from '../models/candidature';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  private apiUrl = 'https://cratechnologie.com:8443/ebax/candidature';

  constructor(private http: HttpClient) { }

  getAllCandidatures(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(environment.myAppApiUrl + "/candidature/").pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of([]);
      })
    );
  }

  getCandidatureById(id: string): Observable<Candidature | undefined> {
    return this.http.get<Candidature | undefined>(`${this.apiUrl}/${id}`).pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of(undefined);
      })
    );
  }

  createCandidature(candidature: FormData): Observable<Candidature | undefined> {
    return this.http.post(environment.myAppApiUrl + "/candidature/", candidature).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  envoyerCandidature(candidature: any, cv: File): Observable<any> {
    const formData = new FormData();
    formData.append('candidature', JSON.stringify(candidature));
    formData.append('cv', cv);

    return this.http.post(`${environment.myAppApiUrl}/candidature/envoyer`, formData);
  }

  updateCandidature(candidature: Candidature): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put(environment.myAppApiUrl + "/candidature/", candidature, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteCandidature(candidatureId: number): Observable<null> {
    return this.http.delete(`${this.apiUrl}/${candidatureId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  searchCandidatureByTerm(term: string): Observable<Candidature[]> {
    if (term.length <= 1) {
      return of([]);
    }
    return this.http.get<Candidature[]>(`${this.apiUrl}/?term=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
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
