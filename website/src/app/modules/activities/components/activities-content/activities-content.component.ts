import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-content',
  templateUrl: './activities-content.component.html',
  styleUrls: ['./activities-content.component.css']
})
export class ActivitiesContentComponent implements OnInit {

  constructor() { }

  @Input() component: number;

  ngOnInit(): void {
  }

}
