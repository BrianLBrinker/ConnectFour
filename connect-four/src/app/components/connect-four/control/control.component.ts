import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Renderer2
} from "@angular/core";
import { TokenVals } from "src/app/models/player";

@Component({
  selector: "app-control",
  templateUrl: "./control.component.html",
  styleUrls: ["./control.component.scss"]
})
export class ControlComponent implements OnInit {
  @Input() boardWidth: number;
  @Input() boardHeight: number;
  @Input() tokenGrid: TokenVals[][];
  @Input() player: TokenVals;
  @Input() gameOver: boolean;

  @Output() buttonClickedEvent = new EventEmitter<number>();

  public columns: any[];
  public player1 = TokenVals.player1;

  private fallTime: number;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.columns = new Array(this.boardWidth);
  }

  private depthOfColumn(index: number): number {
    return this.tokenGrid.filter(row => row[index] === TokenVals.unclaimed)
      .length;
  }

  private dropTokenInColumn(tokenButton: Event, colIndex: number): void {
    const cellSize = 70;

    this.fallTime = Math.round(
      (600 * this.depthOfColumn(colIndex)) / this.boardHeight
    );

    this.renderer.setStyle(
      tokenButton.target,
      "top",
      `${this.depthOfColumn(colIndex) * cellSize}px`
    );
    this.renderer.setStyle(
      tokenButton.target,
      "transitionDuration",
      this.fallTime
    );

    window.setTimeout(() => {
      this.renderer.setStyle(tokenButton.target, "background", "transparent");
      this.renderer.setStyle(tokenButton.target, "top", "0px");
      this.renderer.setStyle(tokenButton.target, "transitionDuration", "0");
    }, this.fallTime);
    window.setTimeout(() => {
      this.renderer.setStyle(tokenButton.target, "background", "");
    }, 2 * this.fallTime);
  }

  public hasRoomInColumn(index: number): boolean {
    return this.tokenGrid.some(row => row[index] === TokenVals.unclaimed);
  }

  public buttonClicked(evt: Event, colIndex: number) {
    this.dropTokenInColumn(evt, colIndex);
    window.setTimeout(() => {
      this.buttonClickedEvent.emit(colIndex);
    }, this.fallTime);
  }
}
