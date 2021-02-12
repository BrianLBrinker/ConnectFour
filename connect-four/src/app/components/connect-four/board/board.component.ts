import { Component, OnInit, Input } from "@angular/core";
import { TokenVals } from "src/app/models/player";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  @Input() boardWidth: number;
  @Input() boardHeight: number;
  @Input() tokenGrid: TokenVals[][];

  public columns: number[];
  public rows: number[];
  public cellSize = 70;
  public cellMargin = 10;

  constructor() {}

  ngOnInit(): void {
    this.rows = new Array(this.boardHeight);
    this.columns = new Array(this.boardWidth);
  }

  public getClassFrom(token: TokenVals): string {
    switch (token) {
      case TokenVals.unclaimed:
        return "token ";
      case TokenVals.player1:
        return "token player1";
      case TokenVals.player2:
        return "token player2";
      default:
        return "token ";
    }
  }
}
