import { Component, OnInit, Input } from '@angular/core';
import { Figure } from '../models/Figure';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  figure?: Figure


  constructor() { }

  ngOnInit(): void {
  }

}
