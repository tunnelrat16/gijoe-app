import { Component, OnInit, Input } from '@angular/core';
import { Figure } from '../models/Figure';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FigureService } from '../figure.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  @Input() id!: number;
  @Input() name!: string;
  @Input() year!: string;
  @Input() team!: string;
  @Input() variation!: string;
  @Input() imageUrl!: string;
  @Input() watchList!: string;
  @Input() total!: string;
  @Input() notes!: string;

  figure?: Figure

  constructor(
    private route: ActivatedRoute,
    private figureService: FigureService,
  ) {}

  ngOnInit(): void {
    this.getFigure();
  }

  getFigure(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.figureService.getFigure(id).subscribe((response) => {
      console.log(response.figure);
      this.figure = response.figure;
    });
  }
}

// export class DetailPageComponent implements OnInit {
//   figures: Figure[] = [];

//   constructor(private figureService: FigureService) {}

//   ngOnInit() {
//     this.figureService.fetchFigures().subscribe(response => {
//       this.figures = response.figures;
//     });
//   }
// }
