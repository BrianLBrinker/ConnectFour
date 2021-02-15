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
  public winner: TokenVals;
  public noWinner = TokenVals.unclaimed;
  public gameOver = false;
  public turnCount = 0;

  private maxTurns: number;
  private minTurns: number;

  constructor() {}

  ngOnInit(): void {
    this.initTokenGrid(this.boardWidth, this.boardHeight);
    this.initPlayers();
    this.maxTurns = this.boardWidth * this.boardHeight;
    this.minTurns = 2 * this.connectionLength - 1;
  }

  public resetGame(): void {
    this.initTokenGrid(this.boardWidth, this.boardHeight);
    this.initPlayers();
    this.gameOver = false;
    this.turnCount = 0;
  }

  private initTokenGrid(width: number, height: number): void {
    this.tokenGrid = new Array(height)
      .fill(TokenVals.unclaimed)
      .map(() => new Array(width).fill(TokenVals.unclaimed));
  }

  private initPlayers(): void {
    this.currentPlayer = TokenVals.player1;
    this.winner = TokenVals.unclaimed;
  }

  private togglePlayers(): void {
    if (this.currentPlayer === TokenVals.player1) {
      this.currentPlayer = TokenVals.player2;
    } else {
      this.currentPlayer = TokenVals.player1;
    }
  }

  private testHorizontalsFrom(
    rowIndex: number,
    colIndex: number,
    grid: TokenVals[][],
    player: TokenVals
  ): boolean {
    let nodes = [];

    for (let i = 0; i < this.connectionLength; i += 1) {
      nodes.push(grid[rowIndex][colIndex + i]);
    }

    return nodes.every(node => node === player);
  }

  private testVerticalsFrom(
    rowIndex: number,
    colIndex: number,
    grid: TokenVals[][],
    player: TokenVals
  ): boolean {
    let nodes = [];

    for (let i = 0; i < this.connectionLength; i += 1) {
      nodes.push(grid[rowIndex - i][colIndex]);
    }

    return nodes.every(node => node === player);
  }

  private testBkwdDiagsFrom(
    rowIndex: number,
    colIndex: number,
    grid: TokenVals[][],
    player: TokenVals
  ): boolean {
    let nodes = [];

    for (let i = 0; i < this.connectionLength; i += 1) {
      nodes.push(grid[rowIndex - i][colIndex - i]);
    }

    return nodes.every(node => node === player);
  }

  private testFrwdDiagsFrom(
    rowIndex: number,
    colIndex: number,
    grid: TokenVals[][],
    player: TokenVals
  ): boolean {
    let nodes = [];

    for (let i = 0; i < this.connectionLength; i += 1) {
      nodes.push(grid[rowIndex - i][colIndex + i]);
    }

    return nodes.every(node => node === player);
  }

  private playerWins(player: TokenVals, grid: TokenVals[][]): boolean {
    const topRow = this.connectionLength - 1;
    const rightCol = this.boardWidth - this.connectionLength + 1;
    const leftCol = this.connectionLength - 1;
    const gameWinnable = this.turnCount >= this.minTurns ? true : false;

    if (gameWinnable) {
      for (let rowIndex = this.boardHeight - 1; rowIndex >= 0; rowIndex -= 1) {
        for (let colIndex = 0; colIndex < this.boardWidth; colIndex += 1) {
          if (this.tokenGrid[rowIndex][colIndex] === this.currentPlayer) {
            if (colIndex < rightCol) {
              if (this.testHorizontalsFrom(rowIndex, colIndex, grid, player)) {
                return true;
              }
            }
            if (rowIndex >= topRow) {
              if (this.testVerticalsFrom(rowIndex, colIndex, grid, player)) {
                return true;
              }
            }
            if (rowIndex >= topRow && colIndex < rightCol) {
              if (this.testFrwdDiagsFrom(rowIndex, colIndex, grid, player)) {
                return true;
              }
            }
            if (rowIndex >= topRow && colIndex >= leftCol) {
              if (this.testBkwdDiagsFrom(rowIndex, colIndex, grid, player)) {
                return true;
              }
            }
          }
        }
      }
    }

    return false;
  }

  private depositTokenAt(index: number, player: TokenVals): void {
    for (let rowIndex = this.boardHeight - 1; rowIndex >= 0; rowIndex -= 1) {
      if (this.tokenGrid[rowIndex][index] === TokenVals.unclaimed) {
        this.tokenGrid[rowIndex][index] = this.currentPlayer;
        break;
      }
    }

    if (!this.playerWins(this.currentPlayer, this.tokenGrid)) {
      if (this.turnCount < this.maxTurns) {
        this.togglePlayers();
      } else {
        this.gameOver = true;
      }
    } else {
      this.gameOver = true;
      this.winner = this.currentPlayer;
    }
  }

  public registerClick(index: number): void {
    if (!this.gameOver && this.turnCount < this.maxTurns) {
      this.turnCount += 1;
      this.depositTokenAt(index, this.currentPlayer);
    }
  }
}
