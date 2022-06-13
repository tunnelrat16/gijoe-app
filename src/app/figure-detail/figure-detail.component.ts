import { Component, OnInit } from '@angular/core';
import { FigureService } from '../figure.service';
import { Figure } from '../models/Figure';

@Component({
  selector: 'app-figure-detail',
  templateUrl: './figure-detail.component.html',
  styleUrls: ['./figure-detail.component.scss']
})
export class FigureDetailComponent implements OnInit {
  figures: Figure[] = [];

  constructor(private figureService: FigureService) {}

  ngOnInit() {
    this.figureService.fetchFigures().subscribe(response => {
      this.figures = response.figures;
    });
  }
}
