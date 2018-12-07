import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../services/task-manager.service';
import { TaskModel } from '../model/task.model';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  taskList: TaskModel[];
  searchString:string;
  filterData:TaskModel= new TaskModel();
  constructor(private taskManagerServece: TaskManagerService) { }

  ngOnInit() {
    this.taskManagerServece.getTask().subscribe(res => {
      this.taskList = res.outData;
      // console.log(this.taskList);
    });
  }

  public endTask(index){
    this.taskManagerServece.endTask(this.taskList[index].taskId).subscribe(r=>this.taskList[index].flag='Y'); 
    // this.taskList[index].flag='Y';
    console.log(this.taskList[index]);
  }

}
