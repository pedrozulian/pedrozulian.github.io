import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/core/services/github.service';
import { RepositoryGithub } from 'src/app/shared/models/github/repository.model';

@Component({
  selector: 'app-activities-repositories',
  templateUrl: './activities-repositories.component.html',
  styleUrls: ['./activities-repositories.component.css']
})
export class ActivitiesRepositoriesComponent implements OnInit {

  constructor(
    private githubService: GithubService
  ) { }

  repositories: RepositoryGithub[];

  ngOnInit(): void {
    this.getRepositories();
  }

  getRepositories() {
    this.githubService.getRepositories()
      .subscribe(data => {
        this.repositories = data
      });
  }

  copyTextClone(txt: string) {
    let selTxt = document.createElement('textarea');
    selTxt.style.position = 'fixed';
    selTxt.style.left = '0';
    selTxt.style.top = '0';
    selTxt.style.opacity = '0';
    selTxt.value = 'git clone ' + txt;
    document.body.appendChild(selTxt);
    selTxt.focus();
    selTxt.select();
    document.execCommand('copy');
    document.body.removeChild(selTxt);
  }

}
