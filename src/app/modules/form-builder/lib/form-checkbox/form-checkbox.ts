import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";
@Component({
  selector: "form-checkbox",
  templateUrl: "./form-checkbox.html",
  styleUrls: ["./form-checkbox.scss"]
})
export class FormCheckboxComponent implements OnInit {
  placeholder: string;
  type: string = "text";
  value: string[] = [];
  options: any = [];
  label: string;
  ngOnInit() {
    this.placeholder = this.placeholder || this.label;
  }
}
