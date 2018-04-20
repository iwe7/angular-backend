import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";
@Component({
  selector: "form-input",
  templateUrl: "./form-input.html",
  styleUrls: ["./form-input.scss"]
})
export class FormInputComponent implements OnInit {
  placeholder: string;
  type: string = "text";
  value: string;
  label: string;
  ngOnInit() {
    this.placeholder = this.placeholder || this.label;
  }
}
