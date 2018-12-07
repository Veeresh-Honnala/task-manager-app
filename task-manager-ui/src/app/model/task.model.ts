
export class TaskModel{
    taskId:string;
    taskName:string;
    priority:number;
    parentTask:string;
    startDate:string;
    endDate:string;
    flag:string;
    // below fields are used for filtering data
    priorityFrom:number;
    priorityTo:number;
}