import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";
@Component({
  selector: "form-textarea",
  templateUrl: "./form-textarea.html",
  styleUrls: ["./form-textarea.scss"]
})
export class FormTextareaComponent implements OnInit {
  placeholder: string;
  type: string = "text";
  value: string;
  label: string;
  ngOnInit() {
    this.placeholder = this.placeholder || this.label;
  }
}
