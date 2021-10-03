import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  num1 = 0;
  num2 = 0;
  answer = 0;

  getNum1(value:string) {
    const parsedInt = parseInt(value);
    this.num1 = parsedInt;
    console.log(this.num1);
  }

  getNum2(value:string) {
    const parsedInt = parseInt(value);
    this.num2 = parsedInt;
    console.log(this.num2);
  }

  add(){
    this.answer = this.num1 + this.num2;
    console.log(this.answer);
  }

  subtract(){
    this.answer = this.num1 - this.num2;
    console.log(this.answer);
  }

  multiply(){
    this.answer = this.num1 * this.num2;
    console.log(this.answer);
  }

  divide(){
    this.answer = this.num1 / this.num2;
    console.log(this.answer);
  }
}
