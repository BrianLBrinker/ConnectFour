import { Component, OnInit, Input } from "@angular/core";
import { PlayerNumber } from "src/app/models/player";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  @Input() boardWidth: number;
  @Input() boardHeight: number;
  @Input() player: PlayerNumber;

  public bWidth: number[];
  public bHeight: number[];
  public cellSize = 70;
  public cellMargin = 10;
  public tokenSize = 50;

  constructor() {}

  ngOnInit(): void {
    this.bWidth = new Array(this.boardWidth);
    this.bHeight = new Array(this.boardHeight);
  }
}
