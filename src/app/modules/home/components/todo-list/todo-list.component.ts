import { Component, DoCheck } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<Task> = JSON.parse(localStorage.getItem("item") || '[]');

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }

  public deleteAll(): void {
    if (window.confirm('Deseja mesmo deletar todas as tarefas?')) {
      this.taskList = [];
    }
  }

  public addTaskItem(task: string): void {
    this.taskList.push({ task: task, checked: false });
  }

  public validInput(task: string, index: number): void {
    if (task.length) {
      return;
    }

    if (!window.confirm('A tarefa está vazia. Deseja excluí-la?')) {
      return;
    }

    this.deleteTask(index);
  }

  private setLocalStorage(): void {
    if (!this.taskList) {
      return;
    }

    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }
}
