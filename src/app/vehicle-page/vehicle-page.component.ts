import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../models/Vehicle';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';


@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.scss']
})

export class VehiclePageComponent implements OnInit {
  @Input() id!: number;
  @Input() name!: string;
  @Input() aka!: string;
  @Input() year!: string;
  @Input() team!: string;
  @Input() imageUrl!: string;
  @Input() watchList!: string;
  @Input() total!: string;
  @Input() notes!: string;
  @Input() version!: string;
  @Input() variant!: string;

  vehicle?: Vehicle

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
  ) {}

  ngOnInit(): void {
    this.getVehicle();
  }

  getVehicle(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehicleService.getVehicle(id).subscribe((response) => {
      console.log(response.vehicle);
      this.vehicle = response.vehicle;
    });
  }
}
