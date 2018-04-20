import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";
@Component({
  selector: "form-radio",
  templateUrl: "./form-radio.html",
  styleUrls: ["./form-radio.scss"]
})
export class FormRadioComponent implements OnInit {
  placeholder: string;
  type: string = "radio";
  value: string;
  options: any[] = [];
  label: string;
  ngOnInit() {
    this.placeholder = this.placeholder || this.label;
  }
}
