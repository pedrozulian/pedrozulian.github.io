import { Deserializable } from '../deserializable.model';
import { GithubCommit } from './github-commit.model';
import { GithubRepository } from './github-repository.model';

export class GithubEvent implements Deserializable {
    repo?: GithubRepository;
    id?: number;
    type?: string;
    commits?: GithubCommit[];

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}