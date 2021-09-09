import { Directive ,Renderer2,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private myRender:Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.highLight("lightblue");
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.highLight(null);
  }

  // @HostListener('mousehover')
  // onMouseHover(){
  //   this.highLight("red");
  // }

 private highLight(color:string){
   this.myRender.setStyle(this.el.nativeElement,"backgroundColor", color);
 }
}
