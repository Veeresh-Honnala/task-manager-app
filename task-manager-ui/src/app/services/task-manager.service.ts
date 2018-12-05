import { Injectable } from '@angular/core';
import { TaskModel } from '../model/task.model';
import { ResponseModel } from '../model/response.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subscriber } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
import { restoreBindingIndex } from '@angular/core/src/render3/instructions';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  mock: boolean = false;
  constructor(private httpClient: HttpClient) { }

  public saveTask(task: TaskModel): Observable<any> {
    if (this.mock) {
      return this.httpClient.post<TaskModel>('', task, httpOptions).pipe(
        tap((task: TaskModel) => console.log(`added task w/ id=${task.taskName}`)),
        catchError(this.handleError<TaskModel>('addTask')));
    } else {
      // return  Observable.of(addTskResJson).map(o=>JSON.stringify(o));
      let res = new ResponseModel<string>();
      res.errCode = '0';
      res.outData = 'Success';
      res.status = 'Success';
      return new Observable<ResponseModel<string>>((subscriber: Subscriber<ResponseModel<string>>) => subscriber.next(res));
    }

  }

  public getTask(task: TaskModel): Observable<any> {
    if (this.mock) {

      return this.httpClient.post<TaskModel>('../../assets/task-list-response.json', task, httpOptions).pipe(
        tap((task: TaskModel) => console.log(`added task w/ id=${task.taskName}`)),
        catchError(this.handleError<TaskModel>('addTask')));
    } else {
      return this.httpClient.get('../../assets/task-list-response.json').pipe(
        tap((task: TaskModel) => console.log(`added task w/ id=${task.taskName}`)),
        catchError(this.handleError<TaskModel>('addTask')));

    }
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