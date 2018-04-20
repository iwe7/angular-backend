import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MaterialFormBuilderModule,
  FormContainerComponent,
  FormInputComponent,
  FormTextareaComponent,
  FormSelectComponent,
  FormRadioComponent,
  FormToggleComponent,
  FormSliderComponent,
  FormDatePickerComponent,
  FormCheckboxComponent
} from "./public_api";
@NgModule({
  imports: [CommonModule],
  exports: [MaterialFormBuilderModule],
  declarations: []
})
export class FormBuilderModule {
  get(key: string) {
    if (key === "form-container") {
      return FormContainerComponent;
    }
    if (key === "form-input") {
      return FormInputComponent;
    }
    if (key === "form-textarea") {
      return FormTextareaComponent;
    }
    if (key === "form-select") {
      return FormSelectComponent;
    }
    if (key === "form-radio") {
      return FormRadioComponent;
    }
    if (key === "form-toggle") {
      return FormToggleComponent;
    }
    if (key === "form-slider") {
      return FormSliderComponent;
    }
    if (key === "form-date-picker") {
      return FormDatePickerComponent;
    }
    if (key === "form-checkbox") {
      return FormCheckboxComponent;
    }
  }
}
