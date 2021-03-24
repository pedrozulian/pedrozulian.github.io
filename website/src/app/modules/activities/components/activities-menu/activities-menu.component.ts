import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-activities-menu',
  templateUrl: './activities-menu.component.html',
  styleUrls: ['./activities-menu.component.css']
})
export class ActivitiesMenuComponent implements OnInit {

  constructor() { }

  @Output() idComponent: number;

  componentOptions: Object[] = [
    { id: 1, name: 'Commits', componentSelector: 'app-activities-commits' },
    { id: 2, name: 'Repositórios', componentSelector: 'app-activities-repositories' }
  ];

  ngOnInit(): void {
  }

  chooseComponent(id: number) {
    this.idComponent = id;
  }

}
