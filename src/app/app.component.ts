import { Component, OnInit } from '@angular/core';
import { FigureService } from './figure.service';
import { Figure } from './models/Figure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  figures: Figure[] = [];

  constructor(private figureService: FigureService) {}

  ngOnInit(): void {
    this.figureService.fetchFigures().subscribe((figures) => {
      this.figures = figures;
    });
  }
}
