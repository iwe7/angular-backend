import { NgModule } from "@angular/core";

import { AuthService } from "./auth.service";
import { ConfigService } from "./config.service";
import { TitleService } from './title.service';
@NgModule({
  providers: [AuthService, ConfigService, TitleService],
  imports: []
})
export class CoreModule {}
