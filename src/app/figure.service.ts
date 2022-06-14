import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Figure } from './models/Figure';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

type FiguresResponse = {
  figures: Figure[];
};

type FigureResponse = {
  figure: Figure;
};

@Injectable({
  providedIn: 'root',
})
export class FigureService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private figuresUrl = 'https://gijoe-api.herokuapp.com/api/gijoe';

  fetchFigures() {
    return this.http.get<FiguresResponse>(this.figuresUrl);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  /** GET figures from the server */
  getFigures(): Observable<Figure[]> {
    return this.http.get<Figure[]>(this.figuresUrl).pipe(
      tap((_) => this.log('fetched figures')),
      catchError(this.handleError<Figure[]>('getFigures', []))
    );
  }

  /** GET figure by id. Will 404 if id not found */
  getFigure(id: number){
    const url = `${this.figuresUrl}/${id}`;
    return this.http.get<FigureResponse>(url).pipe(
      tap(_ => this.log(`fetched figure id=${id}`)),
      catchError(this.handleError<FigureResponse>(`getFigure id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FigureService: ${message}`);
  }
}
