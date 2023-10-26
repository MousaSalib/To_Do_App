import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  child1Value: string = '';

  handleValueAdded(value: string) {
    this.child1Value = value;
  }
}
