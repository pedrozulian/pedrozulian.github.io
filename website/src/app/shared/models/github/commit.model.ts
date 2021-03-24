import { Deserializable } from 'src/app/shared/models/deserializable.model';

export class CommitGithub implements Deserializable {
    sha?: string;
    author?: { email?: string, name?: string };
    message?: string;

    deserialize(input: unknown): this {
        return Object.assign(this, input);
    }
}