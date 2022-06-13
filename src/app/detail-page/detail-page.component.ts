import { Component, OnInit, Input } from '@angular/core';
import { Figure } from '../models/Figure';
import { ActivatedRoute } from '@angular/router';

import { FigureService } from '../figure.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  @Input() figure?: Figure;

  figures: Figure[] = [];

  constructor(
    private route: ActivatedRoute,
    private figureService: FigureService,
  ) {}

  ngOnInit(): void {
    this.getFigure();
  }

  getFigure(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.figureService.getFigure(id)
      .subscribe(figure => this.figure = figure);
  }
}
