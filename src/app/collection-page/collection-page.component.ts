import { Component, OnInit } from '@angular/core';
import { FigureService } from '../figure.service';
import { Figure } from '../models/Figure';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
  figures: Figure[] = [];

  constructor(private figureService: FigureService) {}

  ngOnInit() {
    this.figureService.fetchFigures().subscribe(response => {
      this.figures = response.figures;
      this.getCollection(response)
    });
  }


getCollection(figure: any): boolean {
 return figure.total > 0
}

}
