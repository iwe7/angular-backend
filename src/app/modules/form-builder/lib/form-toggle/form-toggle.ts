import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";
@Component({
  selector: "form-toggle",
  templateUrl: "./form-toggle.html",
  styleUrls: ["./form-toggle.scss"]
})
export class FormToggleComponent implements OnInit {
  placeholder: string;
  type: string = "text";
  value: string;
  label: string;
  ngOnInit() {
    this.placeholder = this.placeholder || this.label;
  }
}
