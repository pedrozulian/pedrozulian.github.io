import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/core/services/github.service';

@Component({
  selector: 'app-meus-commits',
  templateUrl: './meus-commits.component.html',
  styleUrls: ['./meus-commits.component.css']
})
export class MeusCommitsComponent implements OnInit {

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
