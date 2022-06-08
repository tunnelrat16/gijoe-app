import {Injectable} from '@angular/core';
import { of } from 'rxjs';
import {Figure} from './models/Figure';

@Injectable({
  providedIn: 'root'
})
export class FigureService {
  figures: Figure[] = [{
    imageUrl: "https://www.yojoe.com/images/resize/h/375/imagestore/7/73944.jpg",
    name: "Cobra: The Enemy",
    year: "1982",
    team: "Cobra",
    variation: "Straight-arm",
}]

fetchFigures() {
  return of(this.figures)
}

}
