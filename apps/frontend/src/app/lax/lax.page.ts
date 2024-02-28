import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';
declare var lax: any;

@Component({
  selector: 'app-lax',
  templateUrl: './lax.page.html',
  styleUrls: ['./lax.page.css'],
})
export class LaxPage implements OnDestroy, AfterViewInit {

  constructor() { }
  
  handleScrollStart() {
    // console.log('scroll start');
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    lax.addDriver('scrollY', function () {
      return ev.detail.currentY
    })
  }

  handleScrollEnd() {
    // console.log('scroll end');
  }

  public scroll(event: any) {
    lax.update(window.scrollY);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    window.onload = function() {
      lax.init()
      // Add a driver that we use to control our animations
      lax.addDriver('scrollY', function() {
        return document.body.scrollTop
      })
      // Add animation bindings to elements
      lax.addElements('.selector', {
        scrollY: {
          translateX: [
            ["elInY", "elCenterY", "elOutY"],
            [0, 'screenWidth/2', 'screenWidth'],
          ]
        }
      });
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
