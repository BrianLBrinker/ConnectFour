import { Component, OnInit } from "@angular/core";
import { BoardDimensions } from "src/app/models/board";

@Component({
  selector: "app-connect-four",
  templateUrl: "./connect-four.component.html",
  styleUrls: ["./connect-four.component.scss"]
})
export class ConnectFourComponent implements OnInit {
  public dimensions: BoardDimensions = { width: 7, height: 6 };

  constructor() {}

  ngOnInit(): void {}

  private createBoard() {}
}
