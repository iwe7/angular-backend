import { NgModule } from "@angular/core";

import { AuthService } from "./auth.service";
import { ConfigService } from "./config.service";
import { TitleService } from "./title.service";
import { FormBuilderService } from "./form-builder.service";
import { MeepoRender } from "meepo-render-5";
@NgModule({
  providers: [
    AuthService,
    ConfigService,
    TitleService,
    FormBuilderService,
    MeepoRender
  ],
  imports: []
})
export class CoreModule {}
