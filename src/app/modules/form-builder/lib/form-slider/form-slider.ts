import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";
@Component({
  selector: "form-slider",
  templateUrl: "./form-slider.html",
  styleUrls: ["./form-slider.scss"]
})
export class FormSliderComponent implements OnInit {
  placeholder: string;
  value: number;
  min: number = 0;
  max: number = 100;
  label: string;
  ngOnInit() {
    this.placeholder = this.placeholder || this.label;
  }
}
