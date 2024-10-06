import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  isShowScroll = false;
  topPosToStartShowing = 100;

  // Check how far the user has scrolled
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // Show the button after scrolling down 100px
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShowScroll = true;
    } else {
      this.isShowScroll = false;
    }
  }

  // Scroll the user to the top of the page
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
