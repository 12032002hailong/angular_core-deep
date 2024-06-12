import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true,
  exportAs: 'hl'
})
export class HighlightedDirective {


  @Input('highlighted')
  isHighLighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

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

  // @HostListener('mouseover', ['$event'])
  // mouseOver() {
  //   this.isHighLighted = true;
  //   this.toggleHighlight.emit(this.isHighLighted)
  // }

  // @HostListener('mouseleave')
  // mouseLeave() {
  //   this.isHighLighted = false;
  //   this.toggleHighlight.emit(this.isHighLighted)

  // }

  toggle() {
    this.isHighLighted = !this.isHighLighted;
    this.toggleHighlight.emit(this.isHighLighted)
  }


}
