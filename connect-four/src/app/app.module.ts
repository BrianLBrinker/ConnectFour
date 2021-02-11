import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConnectFourComponent } from "./components/connect-four/connect-four.component";
import { BoardComponent } from "./components/connect-four/board/board.component";
import { CellComponent } from "./components/connect-four/board/cell/cell.component";

@NgModule({
  declarations: [
    AppComponent,
    ConnectFourComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
