import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/core/services/github.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(
    private githubService: GithubService
  ) { }

  events = [];

  ngOnInit() {
    this.getEventsGithub();
    console.log(this.events);
  }

  getEventsGithub() {
    this.githubService.getEventsGithub()
      .subscribe((events) => { this.events.push(events) });
  }

}
