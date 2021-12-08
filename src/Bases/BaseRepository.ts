export interface BaseRepository<T> {
    findById (id: number): Promise<T>;
    findAll (): Promise<Promise<T>[]>;
    create (entity: T): Promise<T>;
    update (id: number, entity: T): Promise<T>;
    delete (id: number): Promise<T>;
}
