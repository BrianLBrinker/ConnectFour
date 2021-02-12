import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-control",
  templateUrl: "./control.component.html",
  styleUrls: ["./control.component.scss"]
})
export class ControlComponent implements OnInit {
  @Input() boardWidth: any;
  @Output() buttonClickedEvent = new EventEmitter<number>();

  public bWidth: any[];

  constructor() {}

  ngOnInit(): void {
    this.bWidth = new Array(this.boardWidth);
  }

  public buttonClicked(buttonIndex: number) {
    this.buttonClickedEvent.emit(buttonIndex);
  }
}
