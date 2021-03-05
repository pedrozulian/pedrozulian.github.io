import { GithubRepository } from './github-repository.model';

export interface GithubEvent extends GithubRepository {
    id?: number;
    type?: string;
    repo?: GithubRepository;
}