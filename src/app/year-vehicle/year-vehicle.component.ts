import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../models/Vehicle';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-year-vehicle',
  templateUrl: './year-vehicle.component.html',
  styleUrls: ['./year-vehicle.component.scss'],
})
export class YearVehicleComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  vehicles: Vehicle[] = [];

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.vehicleService.fetchVehicles().subscribe((response) => {
      this.vehicles = response.vehicles;
      console.log(response.vehicles);
      this.getYear(response);
    });
  }

  getYear(vehicle: any): boolean {
    const pageYear = Number(this.route.snapshot.paramMap.get('year'));
    console.log(vehicle.year, pageYear);
    return vehicle.year != pageYear;
  }
}
