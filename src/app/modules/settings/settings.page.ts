import {
  Component,
  Injector,
  ViewContainerRef,
  ViewChild,
  ElementRef,
  ViewEncapsulation
} from "@angular/core";
import { BasePage } from "@classes/base.class";
import { FormBuilderService } from "@core/form-builder.service";
import * as CodeMirror from "codemirror";
@Component({
  selector: "settings-page",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SettingsPage extends BasePage {
  @ViewChild("form", { read: ViewContainerRef })
  form: ViewContainerRef;
  fields = [
    {
      type: "string",
      value: "",
      label: "请输入"
    },
    {
      type: "select",
      value: "",
      label: "请选择",
      options: [
        {
          title: "option1",
          value: "option1"
        },
        {
          title: "option2",
          value: "option2"
        }
      ]
    },
    {
      type: "date",
      value: "",
      label: "日期"
    },
    {
      type: "radio",
      value: "",
      label: "日期",
      options: [
        {
          title: "option1",
          value: "option1"
        },
        {
          title: "option2",
          value: "option2"
        }
      ]
    },
    {
      type: "checkbox",
      value: "",
      label: "日期",
      options: [
        {
          title: "option1",
          value: "option1"
        },
        {
          title: "option2",
          value: "option2"
        }
      ]
    },
    {
      type: "checkbox",
      value: "",
      label: "日期",
      options: [
        {
          title: "option1",
          value: "option1"
        },
        {
          title: "option2",
          value: "option2"
        }
      ]
    }
  ];
  editor: any;
  @ViewChild("text") text: ElementRef;
  constructor(injector: Injector, public fb: FormBuilderService) {
    super(injector, "全局设置");
  }

  ngOnInit() {
    this.editor = CodeMirror.fromTextArea(this.text.nativeElement, {
      indentWithTabs: true,
      smartIndent: true,
      styleActiveLine: true,
      lineNumbers: true,
      lineWrapping: true,
      matchBrackets: true,
      autofocus: true,
      extraKeys: { "Ctrl-Space": "autocomplete" },
      mode: {
        name: "javascript",
        json: true
      }
    });
    this.editor.setValue(`${JSON.stringify(this.fields)}`);
    this.editor.on("keyup", () => {});
  }

  creatForm() {
    this.form.clear();
    this.fields = JSON.parse(this.editor.getValue());
    this.fb.createForm(this.fields, this.form).subscribe(res => {
      console.log(res);
    });
  }
}
