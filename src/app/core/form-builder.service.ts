import { Title } from "@angular/platform-browser";
import { Injectable, Inject, ViewContainerRef } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { from } from "rxjs/observable/from";
import { tap, map, switchMap } from "rxjs/operators";
export abstract class FormBuilder {
  pre: string = "";
  formJson: any = {
    selector: this.pre + "form-container",
    inputs: {
      fields: []
    },
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
  createForm(fields: any[], view: ViewContainerRef) {
    from(fields)
      .pipe(
        tap(res => {
          if (["input", "string"].indexOf(res.type) > -1) {
            this.createInput(res);
          }
          if (["image", "uploader"].indexOf(res.type)) {
            this.createUpload(res);
          }
          if (["slider"].indexOf(res.type) > -1) {
            this.createSlider(res);
          }
          if (["date", "datepicker"].indexOf(res.type) > -1) {
            this.createDatepicker(res);
          }
          if (["check", "checkbox"].indexOf(res.type) > -1) {
            this.createCheckbox(res);
          }
          if (["radio"].indexOf(res.type) > -1) {
            this.createRadio(res);
          }
          if (["select"].indexOf(res.type) > -1) {
            this.createSelect(res);
          }
          if (["toggle"].indexOf(res.type) > -1) {
            this.createToggle(res);
          }
        })
      )
      .subscribe();
    return this.render.compiler(this.formJson, view);
  }
  // input or string
  abstract createInput(item: any): void;
  // image or upload
  abstract createUpload(item: any): void;
  // slider
  abstract createSlider(item: any): void;
  // date
  abstract createDatepicker(item: any): void;
  // checkbox
  abstract createCheckbox(item: any): void;
  // radio
  abstract createRadio(item: any): void;
  // select
  abstract createSelect(item: any): void;
  // toggle
  abstract createToggle(item: any): void;
}
import { MeepoRender } from "meepo-render-5";
@Injectable()
export class FormBuilderService extends FormBuilder {
  constructor(render: MeepoRender) {
    super(render);
  }

  createInput(opts: any) {
    this.formJson.inputs.fields.push({
      selector: this.pre + "form-input",
      inputs: {
        label: opts.label || "",
        type: opts.type || "text",
        options: opts.options || []
      }
    });
  }

  createUpload(item: any) {
    this.formJson.inputs.fields.push({
      selector: this.pre + "form-upload",
      inputs: {
        label: item.label || "",
        type: item.type || "text",
        options: item.options || []
      }
    });
  }

  createSlider(item: any) {
    this.formJson.inputs.fields.push({
      selector: this.pre + "form-slider",
      inputs: {
        label: item.label || "",
        type: item.type || "text",
        options: item.options || []
      }
    });
  }

  createDatepicker(item: any) {
    this.formJson.inputs.fields.push({
      selector: this.pre + "form-date-picker",
      inputs: {
        label: item.label || "",
        type: item.type || "text",
        options: item.options || []
      }
    });
  }

  createCheckbox(item: any) {
    this.formJson.inputs.fields.push({
      selector: this.pre + "form-checkbox",
      inputs: {
        label: item.label || "",
        type: item.type || "text",
        options: item.options || []
      }
    });
  }

  createRadio(item: any) {
    this.formJson.inputs.fields.push({
      selector: this.pre + "form-radio",
      inputs: {
        label: item.label || "",
        type: item.type || "text",
        options: item.options || []
      }
    });
  }

  createSelect(item: any) {
    this.formJson.inputs.fields.push({
      selector: this.pre + "form-select",
      inputs: {
        label: item.label || "",
        type: item.type || "text",
        options: item.options || []
      }
    });
  }

  createToggle(item: any) {
    this.formJson.inputs.fields.push({
      selector: this.pre + "form-toggle",
      inputs: {
        label: item.label || "",
        type: item.type || "text",
        options: item.options || []
      }
    });
  }
}
