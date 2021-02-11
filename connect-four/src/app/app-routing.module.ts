import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConnectFourComponent } from "./components/connect-four/connect-four.component";

const routes: Routes = [
  { path: "connect-four", component: ConnectFourComponent },
  { path: "", redirectTo: "/connect-four", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
