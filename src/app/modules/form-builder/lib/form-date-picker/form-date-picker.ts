import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";
@Component({
  selector: "form-date-picker",
  templateUrl: "./form-date-picker.html",
  styleUrls: ["./form-date-picker.scss"]
})
export class FormDatePickerComponent implements OnInit {
  placeholder: string;
  type: string = "text";
  value: string;
  label: string;
  ngOnInit() {
    this.placeholder = this.placeholder || this.label;
  }
}
