import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { RouterModule } from "@angular/router";
import { SettingsPage } from "./settings.page";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: SettingsPage
      }
    ])
  ],
  declarations: [SettingsPage]
})
export class SettingsLazyModule {}
