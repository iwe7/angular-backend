import { Title } from "@angular/platform-browser";
import { Injectable, Inject, ViewContainerRef } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { from } from "rxjs/observable/from";
import { Observable } from 'rxjs';
import { tap, map, switchMap } from "rxjs/operators";
export abstract class FormBuilder {
  formJson: any = {
    selector: "form-container",
    inputs: [],
    outpus: ["submit$"],
    children: {}
  };
  constructor(public render: MeepoRender) {}
  // 创建表单
  /**
    fields: [{
      label: '',
      name: '',
      value: '',
      type: ''
    }]
  */
  createForm(fields: any[], view: ViewContainerRef): Observable<any> {
    from(fields)
      .pipe(
        tap(res => {
          if (["input", "string"].indexOf(res.type) > -1) {
            this.createInput();
          }
          if (["image", "uploader"].indexOf(res.type)) {
            this.createUpload();
          }
          if (["slider"].indexOf(res.type) > -1) {
            this.createSlider();
          }
          if (["date", "datepicker"].indexOf(res.type) > -1) {
            this.createDatepicker();
          }
          if (["check", "checkbox"].indexOf(res.type) > -1) {
            this.createCheckbox();
          }
          if (["radio"].indexOf(res.type) > -1) {
            this.createRadio();
          }
          if (["select"].indexOf(res.type) > -1) {
            this.createSelect();
          }
          if (["toggle"].indexOf(res.type) > -1) {
            this.createToggle();
          }
        }),
        // tap
        tap(res => console.log(res))
      )
      .subscribe();
    return this.render.compiler(this.formJson, view);
  }
  // input or string
  abstract createInput(): void;
  // image or upload
  abstract createUpload(): void;
  // slider
  abstract createSlider(): void;
  // date
  abstract createDatepicker(): void;
  // checkbox
  abstract createCheckbox(): void;
  // radio
  abstract createRadio(): void;
  // select
  abstract createSelect(): void;
  // toggle
  abstract createToggle(): void;
}
import { MeepoRender } from "meepo-render-5";
@Injectable()
export class FormBuilderService extends FormBuilder {
  constructor(render: MeepoRender) {
    super(render);
  }

  createInput() {}

  createUpload() {}

  createSlider() {}

  createDatepicker() {}

  createCheckbox() {}

  createRadio() {}

  createSelect() {}

  createToggle() {}
}
