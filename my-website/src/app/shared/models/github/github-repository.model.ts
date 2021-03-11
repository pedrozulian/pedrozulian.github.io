import { Deserializable } from '../deserializable.model';

export class GithubRepository implements Deserializable {
    id?: number;
    node_id?: string;
    name?: string;
    full_name?: string;
    private?: boolean;
    description?: string;
    url?: string;
    created_at?: string;
    updated_at?: string;
    git_url?: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}