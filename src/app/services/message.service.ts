import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Message } from '../models/message.model';
import { environment } from 'src/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'https://cratechnologie.com:8443/ebax/message';

  constructor(private http: HttpClient) { }

  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(environment.myAppApiUrl+ "/message/").pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of([]);
      })
    );
  }

  getMessageById(id: string): Observable<Message | undefined> {
    return this.http.get<Message | undefined>(`${this.apiUrl}/${id}`).pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of(undefined);
      })
    );
  }

  createMessage(message: Message): Observable<Message | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(environment.myAppApiUrl+ "/message/", message, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateMessage(message: Message): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put(environment.myAppApiUrl+ "/message/", message, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteMessage(messageId: number): Observable<null> {
    return this.http.delete(`${this.apiUrl}/${messageId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  searchMessageByTerm(term: string): Observable<Message[]> {
    if (term.length <= 1) {
      return of([]);
    }
    return this.http.get<Message[]>(`${this.apiUrl}/?term=${term}`).pipe(
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
