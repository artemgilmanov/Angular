import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task: Task | undefined;
  private tasksService = inject(TasksService);

  onComplete() {
    this.tasksService.removeTask(this.task!.id);
  }
}
