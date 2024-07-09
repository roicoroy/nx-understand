import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonTitle, IonToolbar, IonHeader, IonButtons, IonBackButton, IonContent, IonLabel, IonItem, ScrollDetail, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
declare var lax: any;
@Component({
  selector: 'nx-understand-details-page',
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonItem, IonLabel, IonContent, IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, CommonModule],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent implements AfterViewInit, OnInit {

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

  ngAfterViewInit() {
  }

  async ngOnInit() {
      await this.init();
  }

  async init(){
    
    lax.init();
    
    // lax.addDriver('scrollY', () => { });
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })
    
    const frameWidth = 370
    const frameCount = 12

    return await lax.addElements(".sprite", {
      scrollY: {
        "background-position": [
          [0, 1e9],
          [0, 1e9],
          {
            cssFn: function (val) {
              const frame = Math.floor(val / 10) % frameCount
              const x = frame * frameWidth

              return `-${x}px 0px`
            },
          }
        ]
      }
    });
  }
}
