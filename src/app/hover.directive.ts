import { Directive, ElementRef, Host, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  @Input() hinvHover: string = ""
  constructor(private element: ElementRef,
    @Inject(DOCUMENT) document: Document,
    private renderer: Renderer2) {
    console.log(this.element.nativeElement)
   }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.hinvHover
    )

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    )
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    )
  }

}
