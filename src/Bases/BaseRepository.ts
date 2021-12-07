export interface BaseRepository<T> {
    findById (id: Number, entity: any): Promise<T>;
    findAll (entity: any): Promise<T>;
    create (entity: any): Promise<T>;
    update (id: Number, entity: any): Promise<T>;
    delete (id: Number, entity: any): Promise<T>;
}
