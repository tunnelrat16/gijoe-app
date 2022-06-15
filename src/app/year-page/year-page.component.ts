import { Component, OnInit } from '@angular/core';
import { FigureService } from '../figure.service';
import { Figure } from '../models/Figure';
import { ActivatedRoute } from '@angular/router';

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


  constructor(private figureService: FigureService, private route: ActivatedRoute,) {}

  ngOnInit() {
    this.figureService.fetchFigures().subscribe(response => {
      this.figures = response.figures;
      console.log(response.figures)
      this.getYear(response)
    });
  }


  getYear(figure: any): boolean {
    const pageYear = Number(this.route.snapshot.paramMap.get('year'));
    console.log(figure.year, pageYear)
   return figure.year != pageYear
  }

  }
