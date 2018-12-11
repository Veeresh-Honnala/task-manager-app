import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TaskManagerService } from '../services/task-manager.service';
import { TaskModel } from '../model/task.model';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  modalRef: BsModalRef;
  taskList: TaskModel[];
  searchString:string;
  index:number;
  filterData:TaskModel= new TaskModel();
  constructor(private taskManagerServece: TaskManagerService,private modalService: BsModalService) { }

  ngOnInit() {
    this.taskManagerServece.getTask().subscribe(res => {
      this.taskList = res.outData;
      // console.log(this.taskList);
    });
  }

  public endTask(index){
    this.taskManagerServece.endTask(this.taskList[index].taskId).subscribe(r=>this.taskList[index].editEnabled='Y'); 
    // this.taskList[index].flag='Y';
    console.log(this.taskList[index]);
  }
  openModal(template: TemplateRef<any>, i) {
    this.index = i;
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.index = null;
    this.modalRef.hide()
  }


}