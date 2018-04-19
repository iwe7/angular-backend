import { Title } from "@angular/platform-browser";
import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class TitleService extends Title {

  pre: string = '后台管理系统';
  constructor(@Inject(DOCUMENT) doc: any) {
    super(doc);
  }

  setTitle(title: string){
    super.setTitle(`${title} - ${this.pre}`);
  }
}
