import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../model/task.model';
import { TaskManagerService } from '../services/task-manager.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  task: TaskModel = new TaskModel();
  successMessage: string = '';

  constructor(private taskManagerService: TaskManagerService) { }

  ngOnInit() {
  }

  public saveOrUpdateTask(): void {
    this.taskManagerService.saveTask(this.task).subscribe(res => { 
      this.successMessage = res.outData;
     })
  }

  public reset():void{
    this.task.endDate='';
    this.task.startDate='';
    this.task.priority=null;
    this.task.taskName='';
    this.task.parentTask='';
  }


}
