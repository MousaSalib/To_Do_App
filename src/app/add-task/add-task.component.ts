import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  inputValue: string = '';

  @Output() valueAdded: EventEmitter<string> = new EventEmitter<string>();

  sendValue() {
    this.valueAdded.emit(this.inputValue);
    this.inputValue = ''
  }
  // deleteItem(index: number) {
  //   if (index >= 0 && index < this.inputValue.length) {
  //     this.inputValue.splice(index, 1);  // Remove the item at the specified index
  //   }
  // }

}
