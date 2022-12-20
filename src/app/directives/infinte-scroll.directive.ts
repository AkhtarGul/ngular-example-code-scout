import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[InfinteScroll]'
})
export class InfinteScrollDirective {

  @Output()
  canGetNewData: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  data: any[] =[];

  @Input()
  limit!: number;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.pageYOffset;
    const currentItemsAmount = this.data.length;

    if (window.innerHeight + scrollPosition >= document.body.offsetHeight && currentItemsAmount < this.limit) {
        this.canGetNewData.emit(true);
    }
  }
}
