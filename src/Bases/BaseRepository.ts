export interface BaseRepository<T> {
    loadById (id: Number, entity: any): Promise<T>;
}