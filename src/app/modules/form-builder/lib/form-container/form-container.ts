import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MeepoRender } from "meepo-render-5";
import { Subject } from "rxjs";
@Component({
  selector: "form-container",
  templateUrl: "./form-container.html",
  styleUrls: ["./form-container.scss"]
})
export class FormContainerComponent implements OnInit {
  form: FormGroup;
  fields: any[] = [];

  @ViewChild("formContainer", { read: ViewContainerRef })
  formContainer: ViewContainerRef;

  change$: Subject<any> = new Subject();
  submit$: Subject<any> = new Subject();

  constructor(private fb: FormBuilder, public render: MeepoRender) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.fields.map(res => {
      if (!this.form.contains(res.name)) {
        this.form.addControl(res.inputs.name, this.fb.control(res.inputs.value, []));
      }
    });
    this.form.valueChanges.subscribe(res => {
      this.change$.next(res);
    });
  }

  submit() {
    this.submit$.next(this.form.value);
  }

  setView(e: ViewContainerRef, item: any) {
    this.render.compiler(item, e).subscribe((res: any) => {
      this.form.get(item.inputs.name).setValue(res.data);
    });
  }
}
