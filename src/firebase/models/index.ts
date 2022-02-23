export interface CreateChild<T> {
    name: string;
    id: string;
    data: T;
}

export interface GetChild<T> {
    name: string;
    data: T;
}
