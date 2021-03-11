import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/core/services/github.service';
import { GithubEvent } from '../../models/github/github-event.model';

@Component({
  selector: 'app-last-commits',
  templateUrl: './last-commits.component.html',
  styleUrls: ['./last-commits.component.css']
})
export class LastCommitsComponent implements OnInit {

  constructor(
    private githubService: GithubService
  ) { }

  events: GithubEvent[] = [];

  ngOnInit(): void {
    this.githubService.getEventsGithub()
      .subscribe((events) => events);
  }

}
