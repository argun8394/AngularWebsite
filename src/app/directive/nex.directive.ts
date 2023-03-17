import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNex]'
})
export class NexDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunc(){
    // console.log(this.el.nativeElement)
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    // console.log(elm)
    var item = elm.getElementsByClassName('item');
    elm.append(item[0]);
  }

}
