import { Component, OnInit, Input } from "@angular/core";
import { BoardDimensions } from "src/app/models/board";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  @Input() dimensions: BoardDimensions;

  constructor() {}

  ngOnInit(): void {}
}
