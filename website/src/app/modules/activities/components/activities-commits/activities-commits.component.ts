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
  p: number = 1;
  urlRepo: string[];

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.githubService.getCommits()
      .subscribe(data => {
        this.commits = [].concat.apply([], data);
      });
  }

  formatLinkRepo(url: string, sha: string) {
    if (url) {
      const link = url.replace('api.', '')
                      .replace('/repos', '')
                      .replace('commits', 'commit');
      this.urlRepo = [link];
      return this.urlRepo;
    }
  }

}
