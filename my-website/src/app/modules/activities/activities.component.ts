import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GithubService } from 'src/app/core/services/github.service';
import { ComponentModel } from 'src/app/shared/models/components.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(
    private githubService: GithubService
  ) { }

  optionsSelect: ComponentModel[] = [
    { id: 1, name: "Página inicial"},
    { id: 2, name: 'Últimos commits', selector: 'app-last-commits' }
  ];
  activity = new FormControl('', Validators.required);
  selected: Object;
  currentContent: number;
  events = [];

  ngOnInit() {
    this.getEventsGithub();
  }

  getEventsGithub() {
    this.githubService.getEventsGithub()
      .subscribe((events) => { this.events.push(events) });
  }

  selectChange(event): void {
    this.currentContent = parseInt(event.value.id);
  }

}
