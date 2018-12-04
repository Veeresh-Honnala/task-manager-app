import { Injectable } from '@angular/core';
import { TaskModel } from '../model/task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  
  constructor(private httpClient: HttpClient) { }

  public saveTask(task: TaskModel): Observable<any> {
    return this.httpClient.post<TaskModel>('', task, httpOptions).pipe(
      tap((task: TaskModel) => console.log(`added task w/ id=${task.task}`)),
      catchError(this.handleError<TaskModel>('addTask')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}