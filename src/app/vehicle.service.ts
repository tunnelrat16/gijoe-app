import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from './models/Vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

type VehiclesResponse = {
  vehicles: Vehicle[];
};

type VehicleResponse = {
  id: any;
  vehicle: Vehicle;
};

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private vehiclesUrl = 'https://gijoe-api2.herokuapp.com/api/gijoe';

  fetchVehicles() {
    return this.http.get<VehiclesResponse>(this.vehiclesUrl);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  /** GET vehicle by id. Will 404 if id not found */
  getVehicle(id: number){
    const url = `${this.vehiclesUrl}/${id}`;
    return this.http.get<VehicleResponse>(url).pipe(
      tap(_ => this.log(`fetched vehicle id=${id}`)),
      catchError(this.handleError<VehicleResponse>(`getVehicle id=${id}`))
    );
  }

  /** Update vehicle by id. Will 404 if id not found */
  updateInfo(vehicle: Vehicle){
    const url = `${this.vehiclesUrl}`
    return this.http.post<VehicleResponse>(url, vehicle).pipe(
      tap(_ => console.log(`updated vehicle id=${vehicle.id}`)),
      catchError(this.handleError<any>('updateVehicle'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** Log a VehicleService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`VehicleService: ${message}`);
  }
}
