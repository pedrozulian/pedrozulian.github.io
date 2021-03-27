import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  idComponentSelected: number;
  commitsComponent: boolean;
  repositoriesComponent: boolean = true;

  ngOnInit(): void {
  }

  showComponent(id: number) {
    this.commitsComponent      = id === 1 ? true : false;
    this.repositoriesComponent = id === 2 ? true : false;
  }

}
