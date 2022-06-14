import { Component, OnInit } from '@angular/core';
import { Figure } from '../models/Figure';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FigureService } from '../figure.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
// export class DetailPageComponent implements OnInit {
// figure: Figure | undefined;



//   constructor(
//     private route: ActivatedRoute,
//     private figureService: FigureService,
//     private location: Location,
//   ) {}

//   ngOnInit(): void {
//     this.getFigure();

//   }

//   getFigure(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.figureService.getFigure(id)
//       .subscribe(figure => {console.log(figure);
//         this.figure = figure;

//       })
//   }
// }

export class DetailPageComponent implements OnInit {
  figures: Figure[] = [];

  constructor(private figureService: FigureService) {}

  ngOnInit() {
    this.figureService.fetchFigures().subscribe(response => {
      this.figures = response.figures;
    });
  }
}
