import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "form-container",
        loadChildren: "./form-builder.module#FormBuilderModule"
      },
      {
        path: "form-input",
        loadChildren: "./form-builder.module#FormBuilderModule"
      },
      {
        path: "form-textarea",
        loadChildren: "./form-builder.module#FormBuilderModule"
      },
      {
        path: "form-select",
        loadChildren: "./form-builder.module#FormBuilderModule"
      },
      {
        path: "form-radio",
        loadChildren: "./form-builder.module#FormBuilderModule"
      },
      {
        path: "form-toggle",
        loadChildren: "./form-builder.module#FormBuilderModule"
      },
      {
        path: "form-slider",
        loadChildren: "./form-builder.module#FormBuilderModule"
      },
      {
        path: "form-checkbox",
        loadChildren: "./form-builder.module#FormBuilderModule"
      },
      {
        path: "form-date-picker",
        loadChildren: "./form-builder.module#FormBuilderModule"
      }
    ])
  ]
})
export class FormBuilderRouterModule {}
