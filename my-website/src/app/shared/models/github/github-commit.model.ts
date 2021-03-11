import { Deserializable } from '../deserializable.model';

export class GithubCommit implements Deserializable {
    name?: string;
    email?: string;
    message?: string;
    sha?: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}