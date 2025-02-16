import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  @Input() tasks: { id: number; title: string; completed: boolean }[] = [];
  @Output() toggleTask = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();

  onToggleTask(id: number) {
    this.toggleTask.emit(id);
  }

  onDeleteTask(id: number) {
    this.deleteTask.emit(id);
  }
}
