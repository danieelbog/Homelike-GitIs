interface PageInfo {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

interface Node {
    number: number;
    title: string;
}

interface Edge {
    node: Node;
}

interface Issues {
    totalCount: number;
    pageInfo: PageInfo;
    edges: Edge[];
}

interface Repository {
    issues: Issues;
}

interface Data {
    repository: Repository;
}

export interface GraphQLResponse {
    data: Data;
}
