import { Component, OnInit } from '@angular/core';
import { FigureService } from './figure.service';
import { Figure } from './models/Figure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
