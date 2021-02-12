import { Component, OnInit } from "@angular/core";
import { TokenVals } from "src/app/models/player";

@Component({
  selector: "app-connect-four",
  templateUrl: "./connect-four.component.html",
  styleUrls: ["./connect-four.component.scss"]
})
export class ConnectFourComponent implements OnInit {
  public boardWidth = 7;
  public boardHeight = 6;
  public connectionLength = 4;
  public tokenGrid: TokenVals[][];
  public currentPlayer: TokenVals;

  constructor() {}

  ngOnInit(): void {
    this.initTokenGrid(this.boardWidth, this.boardHeight);
    this.initPlayers();
  }

  private initTokenGrid(width: number, height: number): void {
    this.tokenGrid = new Array(height)
      .fill(TokenVals.unclaimed)
      .map(() => new Array(width).fill(TokenVals.unclaimed));
  }

  private initPlayers(): void {
    this.currentPlayer = TokenVals.player1;
  }

  private togglePlayers(): void {
    if (this.currentPlayer === TokenVals.player1) {
      this.currentPlayer = TokenVals.player2;
    } else {
      this.currentPlayer = TokenVals.player1;
    }
  }

  private testHorizontalConnectionsFrom(rowIndex: number, colIndex: number) {}

  private testConnections(): void {
    const topRow = this.connectionLength;
    const rightCol = this.boardWidth - this.connectionLength;
    const bottomRow = this.boardHeight - this.connectionLength;
    const leftCol = this.connectionLength;

    for (let rowIndex = this.boardHeight - 1; rowIndex >= 0; rowIndex -= 1) {
      for (let colIndex = 0; colIndex < this.boardWidth; colIndex += 1) {
        // console.info(rowIndex, ", ", colIndex);
      }
    }
  }

  private depositTokenAt(index: number, player: TokenVals): void {
    for (let rowIndex = this.boardHeight - 1; rowIndex >= 0; rowIndex -= 1) {
      if (this.tokenGrid[rowIndex][index] === TokenVals.unclaimed) {
        this.tokenGrid[rowIndex][index] = this.currentPlayer;
        break;
      }
    }

    this.testConnections();
    this.togglePlayers();
  }

  public registerClick(index: number): void {
    this.depositTokenAt(index, this.currentPlayer);
  }
}
