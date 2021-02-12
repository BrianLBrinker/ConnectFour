import { Component, OnInit } from "@angular/core";
import { PlayerNumber } from "src/app/models/player";

@Component({
  selector: "app-connect-four",
  templateUrl: "./connect-four.component.html",
  styleUrls: ["./connect-four.component.scss"]
})
export class ConnectFourComponent implements OnInit {
  public boardWidth: number = 7;
  public boardHeight: number = 6;
  public tokenGrid: number[][];
  public currentPlayer: PlayerNumber;

  constructor() {}

  ngOnInit(): void {
    this.initTokenGrid(this.boardWidth, this.boardHeight);
    this.initPlayers();
  }

  private initTokenGrid(width: number, height: number): void {
    this.tokenGrid = new Array(height)
      .fill(PlayerNumber.unclaimed)
      .map(() => new Array(width).fill(PlayerNumber.unclaimed));
  }

  private initPlayers() {
    this.currentPlayer = PlayerNumber.player1;
    console.info(this.currentPlayer);
  }

  private togglePlayers() {
    if (this.currentPlayer === PlayerNumber.player1) {
      this.currentPlayer = PlayerNumber.player2;
    } else {
      this.currentPlayer = PlayerNumber.player1;
    }
  }

  private depositTokenAt(index: number, player: PlayerNumber) {
    const height = this.boardHeight;

    for (let rowIndex = this.boardHeight - 1; rowIndex >= 0; rowIndex -= 1) {
      if (this.tokenGrid[rowIndex][index] === PlayerNumber.unclaimed) {
        this.tokenGrid[rowIndex][index] = this.currentPlayer;
        break;
      }
    }

    console.info(this.tokenGrid);
    this.togglePlayers();
  }

  registerClick(index: number) {
    this.depositTokenAt(index, this.currentPlayer);
  }
}
