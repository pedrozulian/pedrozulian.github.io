import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/core/services/github.service';
import { CommitGithub } from 'src/app/shared/models/github/commit.model';

@Component({
  selector: 'app-activities-commits',
  templateUrl: './activities-commits.component.html',
  styleUrls: ['./activities-commits.component.css']
})
export class ActivitiesCommitsComponent implements OnInit {

  constructor(
    private githubService: GithubService
  ) { }

  commits: CommitGithub[];

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.githubService.getCommits()
      .subscribe(data => {
        this.commits = [].concat.apply([], data);
      });
  }

}
