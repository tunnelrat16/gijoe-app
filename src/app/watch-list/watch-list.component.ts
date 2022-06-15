import { Component, OnInit } from '@angular/core';
import { FigureService } from '../figure.service';
import { Figure } from '../models/Figure';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  figures: Figure[] = [];

  constructor(private figureService: FigureService) {}

  ngOnInit() {
    this.figureService.fetchFigures().subscribe(response => {
      this.figures = response.figures;
      this.getWatchList(response)
    });
  }


getWatchList(figure: any): boolean {
 return figure.watchList != "Yes"
}

}
