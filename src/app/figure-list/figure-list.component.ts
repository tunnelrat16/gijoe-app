import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figure-list',
  templateUrl: './figure-list.component.html',
  styleUrls: ['./figure-list.component.scss']

})
export class FigureListComponent {
  @Input() name!: string;
  @Input() id!: number;
}
