import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ComponentModel } from 'src/app/shared/models/components.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  optionsSelect: ComponentModel[] = [
    { id: 1, name: "Página inicial"},
    { id: 2, name: 'Últimos commits', selector: 'app-last-commits' }
  ];
  activity = new FormControl('', Validators.required);
  selected: Object;
  currentContent: number;

  ngOnInit() {}

  selectChange(event): void {
    this.currentContent = parseInt(event.value.id);
  }

}
