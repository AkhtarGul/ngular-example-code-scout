import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  showScroll: boolean | undefined;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  constructor() {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showScroll = true;
    } else if (
      this.showScroll &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showScroll = false;
    }
  }

  scrollToTop() {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

}
