import { Component, Injector } from "@angular/core";
import { BasePage } from "@classes/base.class";
@Component({
  selector: "settings-page",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"]
})
export class SettingsPage extends BasePage {
  constructor(injector: Injector) {
    super(injector, "全局设置");
  }
}
