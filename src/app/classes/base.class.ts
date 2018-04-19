import { OnInit, Injector, Input, ElementRef, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { TitleService } from "@core/title.service";

export abstract class Base {}
// 所有自定义component 必须 extends BaseComponent
export abstract class BaseComponent extends Base {
  @Input() color: string;
  pre: string;
  public ele: ElementRef;
  public render: Renderer2;
  constructor(private injector: Injector, private name: string) {
    super();
    this.ele = this.injector.get(ElementRef, null);
    this.render = this.injector.get(Renderer2, null);
  }

  ngOnInit() {
    this.render.addClass(
      this.ele.nativeElement,
      `${this.pre}-${this.name}-${this.color}`
    );
  }
}
// 所有自定义page 必须 extends BasePage
export abstract class BasePage {
  public titleService: TitleService;
  public routerService: Router;
  constructor(private injector: Injector, public pageTitle: string) {
    this.titleService = this.injector.get(TitleService, null);
    this.routerService = this.injector.get(Router, null);
  }

  ngOnInit() {
    this.setTitle();
  }

  setTitle() {
    this.titleService.setTitle(this.pageTitle);
  }
}
