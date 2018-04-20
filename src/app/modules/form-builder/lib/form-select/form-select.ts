import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";
@Component({
  selector: "form-select",
  templateUrl: "./form-select.html",
  styleUrls: ["./form-select.scss"]
})
export class FormSelectComponent implements OnInit {
  placeholder: string;
  value: string;
  options: any[] = [];
  label: string;
  ngOnInit() {
    this.placeholder = this.placeholder || this.label;
  }
}
