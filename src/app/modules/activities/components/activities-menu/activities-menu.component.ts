import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activities-menu',
  templateUrl: './activities-menu.component.html',
  styleUrls: ['./activities-menu.component.css']
})
export class ActivitiesMenuComponent implements OnInit {

  constructor() { }

  @Output() idComponentSelected = new EventEmitter();

  componentOptions: Object[] = [
    { id: 1, name: 'Repositórios', componentSelector: 'app-activities-repositories', checked: true },
    { id: 2, name: 'Commits', componentSelector: 'app-activities-commits', checked: false }
  ];

  ngOnInit(): void {
  }

  chooseComponent(id: number) {
    this.idComponentSelected.emit(id);
  }

}
