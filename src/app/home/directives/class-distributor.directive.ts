import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[classDistributor]'
})
export class ClassDistributorDirective implements OnInit {
  @Input() index!: number;

  constructor(private el: ElementRef<HTMLElement>) {}

  setClass(): string | void {
    
    if ([0, 2].includes(this.index)) return 'size1'
    
    if ([1, 7, 8].includes(this.index)) return 'size2'

    if ([3, 4, 5, 6].includes(this.index)) return 'size3'
    
    if ([9, 10, 11].includes(this.index)) return 'size4'
  }

  ngOnInit() {

    const classAdded = this.setClass()

    if (classAdded) this.el.nativeElement.classList.add(classAdded);
  }
}
