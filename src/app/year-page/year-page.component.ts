import { Component, OnInit } from '@angular/core';
import { FigureService } from '../figure.service';
import { Figure } from '../models/Figure';

@Component({
  selector: 'app-year-page',
  templateUrl: './year-page.component.html',
  styleUrls: ['./year-page.component.scss']
})
export class YearPageComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  figures: Figure[] = [];

  constructor(private figureService: FigureService) {}

  ngOnInit() {
    this.figureService.fetchFigures().subscribe(response => {
      this.figures = response.figures;
    });
  }
}
