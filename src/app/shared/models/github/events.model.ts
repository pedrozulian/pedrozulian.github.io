import { Deserializable } from '../deserializable.model';
import { CommitGithub } from './commit.model';
import { RepositoryGithub } from './repository.model';

export class EventsGithub implements Deserializable {
    id?: number;
    type?: string;
    actor?: { id?: number, login?: string };
    repo?: RepositoryGithub;
    payload?: { push_id?: number, ref?: string, commits?: CommitGithub[] };

    deserialize(input: unknown): this {
        return Object.assign(this, input);
    }
}