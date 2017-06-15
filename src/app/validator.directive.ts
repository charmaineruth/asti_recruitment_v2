import { Directive, HostListener, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[validate]'
})
export class ValidatorDirective {

  @Input () minlength = "0";
  @Input () maxlength = "0";

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('keyup',['$event'])
  validate() {
    this.minLengthValidator()
  }

  minLengthValidator() {
    console.log(document.querySelector(".form-group"))
  }
}
