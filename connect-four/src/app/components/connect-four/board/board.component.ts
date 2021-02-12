import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  @Input() boardWidth: any;
  @Input() boardHeight: any;

  public bWidth: any[];
  public bHeight: any[];

  constructor() {}

  ngOnInit(): void {
    this.bWidth = new Array(this.boardWidth);
    this.bHeight = new Array(this.boardHeight);
  }
}
