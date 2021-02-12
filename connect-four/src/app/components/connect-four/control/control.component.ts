import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PlayerNumber } from "src/app/models/player";

@Component({
  selector: "app-control",
  templateUrl: "./control.component.html",
  styleUrls: ["./control.component.scss"]
})
export class ControlComponent implements OnInit {
  @Input() boardWidth: number;
  @Input() player: PlayerNumber;

  @Output() buttonClickedEvent = new EventEmitter<number>();

  public bWidth: any[];
  public player1 = PlayerNumber.player1;

  constructor() {}

  ngOnInit(): void {
    this.bWidth = new Array(this.boardWidth);
  }

  public buttonClicked(buttonIndex: number) {
    this.buttonClickedEvent.emit(buttonIndex);
  }
}
