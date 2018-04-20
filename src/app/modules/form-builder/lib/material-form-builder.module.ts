import { NgModule } from "@angular/core";
import { FormBuilderService } from "./form-builder.service";
import { FormContainerComponent } from "./form-container/form-container";
import { FormInputComponent } from "./form-input/form-input";
import { FormTextareaComponent } from "./form-textarea/form-textarea";
import { FormSelectComponent } from "./form-select/form-select";
import { FormRadioComponent } from "./form-radio/form-radio";
import { FormToggleComponent } from "./form-toggle/form-toggle";
import { FormSliderComponent } from "./form-slider/form-slider";
import { FormCheckboxComponent } from "./form-checkbox/form-checkbox";

import { FormDatePickerComponent } from "./form-date-picker/form-date-picker";


import { GetViewDirective } from "./get-view";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MeepoRender } from "meepo-render-5";
import {
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  declarations: [
    FormContainerComponent,
    FormInputComponent,
    FormTextareaComponent,
    GetViewDirective,
    FormSelectComponent,
    FormRadioComponent,
    FormToggleComponent,
    FormSliderComponent,
    FormDatePickerComponent,
    FormCheckboxComponent
  ],
  entryComponents: [
    FormContainerComponent,
    FormInputComponent,
    FormTextareaComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormToggleComponent,
    FormSliderComponent,
    FormDatePickerComponent,
    FormCheckboxComponent
  ],
  providers: [FormBuilderService, MeepoRender]
})
export class MaterialFormBuilderModule {}
