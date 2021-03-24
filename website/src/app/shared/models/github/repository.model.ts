import { Deserializable } from '../deserializable.model';

export class RepositoryGithub implements Deserializable {
    id?: number;
    node_id?: string;
    name?: string;
    full_name?: string;
    private?: boolean;
    html_url?: string;

    deserialize(input: unknown): this {
        return Object.assign(this, input);
    }
}