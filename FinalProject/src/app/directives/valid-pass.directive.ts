import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidPass]'
})
export class ValidPassDirective {

  constructor(private el: ElementRef, private myRender: Renderer2) { }

  ngOnInit() {

  }

  @HostListener('input')
  inputs() {
    var z = "z";
    var a = "A";
    var myString = this.el.nativeElement.value.slice(0, this.el.nativeElement.value.length - 1);
    if (((this.el.nativeElement.value[this.el.nativeElement.value.length - 1]).charCodeAt(0) > z.charCodeAt(0)
      || (this.el.nativeElement.value[this.el.nativeElement.value.length - 1]).charCodeAt(0) < a.charCodeAt(0)) && isNaN(parseInt(this.el.nativeElement.value[this.el.nativeElement.value.length - 1])))
      this.myRender.setProperty(this.el.nativeElement, "value", myString);
  }


}
