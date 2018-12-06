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
  constructor(private taskManagerServece: TaskManagerService) { }

  ngOnInit() {
    this.taskManagerServece.getTask().subscribe(res => {
      this.taskList = res.outData;
      console.log(this.taskList);
    });
  }

  public endTask(index){
  }

}
