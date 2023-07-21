import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent {
  @Output() emitTaskItem: EventEmitter<string> = new EventEmitter();

  public taskItem: string = '';

  public submitTaskItem(): void  {
    if (!this.taskItem) {
      return;
    }

    this.emitTaskItem.emit(this.taskItem.trim());
    this.taskItem = '';
  }
}
