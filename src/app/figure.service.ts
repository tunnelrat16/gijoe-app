import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import {Figure} from './models/Figure';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

type FiguresResponse = {
  figures: Figure[];
}

@Injectable({
  providedIn: 'root'
})
export class FigureService {
  figures: Figure[] = []

  /** GET figures from the server */
getFigures(): Observable<Figure[]> {
  return this.http.get<Figure[]>(this.figuresURL)
    .pipe(
      tap(_ => this.log('fetched figures')),
      catchError(this.handleError<Figure[]>('getFigures', []))
    );
}

/** GET figure by id. Will 404 if id not found */
getFigure(id: number): Observable<Figure> {
  const url = `${this.figuresURL}/${id}`;
  return this.http.get<Figure>(url).pipe(
    tap(_ => this.log(`fetched figure id=${id}`)),
    catchError(this.handleError<Figure>(`getFigure id=${id}`))
  );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

constructor(private http: HttpClient, private messageService: MessageService) { }

private figuresURL = "https://gijoe-api.herokuapp.com/api/gijoe"


fetchFigures() {
  return this.http.get<FiguresResponse>(this.figuresURL)
}



    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`FigureService: ${message}`);
    }

}
