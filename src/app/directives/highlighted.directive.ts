import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {


  @Input('highlighted')
  isHighLighted = false;

  constructor() {
    console.log("Directive created ....");
  }

  // @HostBinding('className')
  // get cssClasses() {
  //   return "highlighted";
  // }

  // @HostBinding('class.highlighted')
  // get cssClasses() {
  //   return true;
  // }
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighLighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return "true";
  }

}
