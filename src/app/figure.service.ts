import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Figure } from './models/Figure';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

type FiguresResponse = {
  figures: Figure[];
};

type FigureResponse = {
  id: any;
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


  /** GET figure by id. Will 404 if id not found */
  getFigure(id: number){
    const url = `${this.figuresUrl}/${id}`;
    return this.http.get<FigureResponse>(url).pipe(
      tap(_ => this.log(`fetched figure id=${id}`)),
      catchError(this.handleError<FigureResponse>(`getFigure id=${id}`))
    );
  }

  /** Update figure by id. Will 404 if id not found */
  updateInfo(figure: Figure){
    const url = `${this.figuresUrl}`
    return this.http.post<FigureResponse>(url, figure).pipe(
      tap(_ => console.log(`updated figure id=${figure.id}`)),
      catchError(this.handleError<any>('updateFigure'))
    );
  }

/** NOT CURRENTLY IN USE: POST: add a new figure to the server */
addFigure(figure: Figure) {
  return this.http.post<FigureResponse>(this.figuresUrl, figure, this.httpOptions).pipe(
    tap((newFigure: FigureResponse) => this.log(`added figure w/ id=${newFigure.id}`)),
    catchError(this.handleError<FigureResponse>('addHero'))
  );
}

/** NOT CURRENTLY IN USE: DELETE: delete the figure from the server */
deleteFigure(id: number) {
  const url = `${this.figuresUrl}/${id}`;
  return this.http.delete<FigureResponse>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted figure id=${id}`)),
    catchError(this.handleError<FigureResponse>('deleteHero'))
  );
}


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** Log a FigureService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FigureService: ${message}`);
  }
}
