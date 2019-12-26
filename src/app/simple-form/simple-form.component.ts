import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-form",
  templateUrl: "./simple-form.component.html",
  styleUrls: ["./simple-form.component.css"]
})
export class SimpleFormComponent implements OnInit {
  text1: string = "0";
  text2: string = "0";

  result: string = "足し算しましょう。";

  addAndShow(): void {
    let forResult: string = "正しい値を入力して下さい。";
    let num1: number;
    let num2: number;
    num1 = Number(this.text1);
    num2 = Number(this.text2);
    if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
      forResult = `${num1}+${num2}=${num1 + num2}`;
    }
    this.result = forResult;
  }
  constructor() {}

  ngOnInit() {}
}
