import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-connect-four",
  templateUrl: "./connect-four.component.html",
  styleUrls: ["./connect-four.component.scss"]
})
export class ConnectFourComponent implements OnInit {
  public boardWidth: number = 7;
  public boardHeight: number = 6;

  constructor() {}

  ngOnInit(): void {}

  registerClick(index: number) {
    console.info(index);
  }
}
