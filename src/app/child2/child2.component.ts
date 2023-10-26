import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  protected parentValues: string[] = [];

  @Input() set parentValue(value: string) {
    if (value) {
      this.parentValues.push(value);
    }
  }

  get parentValue(): string {
    return this.parentValues.join(', '); // or any logic you want
  }
  // deleteValue(index: number) {
  //   this.parentValues.splice(index, 1);
  // }
  deleteValue(index: number): void {
    if (index >= 0 && index < this.parentValues.length) {
      this.parentValues.splice(index, 1);
    } else {
      console.error('Invalid index for deletion.');
    }
  }


}
