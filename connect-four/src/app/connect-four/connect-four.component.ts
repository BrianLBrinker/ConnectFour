import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-connect-four",
  templateUrl: "./connect-four.component.html",
  styleUrls: ["./connect-four.component.scss"]
})
export class ConnectFourComponent implements OnInit {
  private dimensions = { width: 7, height: 6 };
  constructor() {}

  ngOnInit(): void {}

  private createBoard() {}
}
