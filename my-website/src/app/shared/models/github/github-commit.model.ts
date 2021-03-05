import { GithubEvent } from './github-event.model';

export interface GithubCommit extends GithubEvent {
    name?: string;
    email?: string;
    message?: string;
    sha?: string;
    commits?: GithubEvent[];
}