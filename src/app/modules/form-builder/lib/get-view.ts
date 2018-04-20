import {
  Directive,
  ViewContainerRef,
  Output,
  EventEmitter
} from "@angular/core";
@Directive({
  selector: "[getView]"
})
export class GetViewDirective {
  @Output() getView: EventEmitter<ViewContainerRef> = new EventEmitter();
  constructor(private view: ViewContainerRef) {}
  ngOnInit() {
    this.getView.emit(this.view);
  }
}
