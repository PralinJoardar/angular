import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appVisibility]'
})
export class VisibilityDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color = "red"
  }

}
