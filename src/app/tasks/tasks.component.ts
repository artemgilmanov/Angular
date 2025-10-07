import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string | undefined;
  @Input({ required: true }) name!: string | undefined;

  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      date: '2023-01-01',
      description: 'Description for Task 1',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Task 2',
      date: '2023-01-02',
      description: 'Description for Task 2',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Task 3',
      date: '2023-01-03',
      description: 'Description for Task 3',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onTaskCompleted(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: this.userId!,
      title: taskData.title,
      date: taskData.date,
      description: taskData.summary,
    });
    this.isAddingTask = false;
  }
}
