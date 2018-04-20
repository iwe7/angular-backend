import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "settings",
        loadChildren: "./settings/settings.lazy.module#SettingsLazyModule"
      }
    ])
  ]
})
export class ModulesModule {}
