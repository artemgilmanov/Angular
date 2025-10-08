import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
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

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: userId!,
      title: taskData.title,
      date: taskData.date,
      description: taskData.summary,
    });
    this.saveToLocalStorage();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
