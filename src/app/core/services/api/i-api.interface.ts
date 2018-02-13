import { Observable } from 'rxjs/observable';

export interface IApi<T> {
  keyName: string;
  resourceName: string;

  /**
   * Get EntityList
   * Returns the EntityList
   */
  get(): Observable<T[]>;

  /**
   * Get entity by key.
   * Returns the entity with the key
   * @param id key
   */
  getById(id: number): Observable<T>

 /**
  * Delete entity in EntityList
  * @param id key
  */
  delete(id: number): Observable<{}>;

  /**
   * Save entity in EntityList
   * @param item entity to Save
   */
  save(item?: T): Observable<T>;
}
