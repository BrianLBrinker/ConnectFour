import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TokenVals } from "src/app/models/player";

@Component({
  selector: "app-control",
  templateUrl: "./control.component.html",
  styleUrls: ["./control.component.scss"]
})
export class ControlComponent implements OnInit {
  @Input() boardWidth: number;
  @Input() player: TokenVals;

  @Output() buttonClickedEvent = new EventEmitter<number>();

  public columns: any[];
  public player1 = TokenVals.player1;

  constructor() {}

  ngOnInit(): void {
    this.columns = new Array(this.boardWidth);
  }

  public buttonClicked(buttonIndex: number) {
    this.buttonClickedEvent.emit(buttonIndex);
  }
}
