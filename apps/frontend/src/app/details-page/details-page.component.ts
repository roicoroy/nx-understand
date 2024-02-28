import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonTitle, IonToolbar, IonHeader, IonButtons, IonBackButton, IonContent, IonLabel, IonItem } from "@ionic/angular/standalone";
declare var lax: any;
@Component({
  selector: 'nx-understand-details-page',
  standalone: true,
  imports: [IonItem, IonLabel, IonContent, IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, CommonModule],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css',
})
export class DetailsPageComponent implements AfterViewInit, OnInit {

  ngAfterViewInit() {
    window.onload = function () {
      lax.init()

      const input: any = document.getElementById('input')

      // Add lax driver for inputLength
      lax.addDriver('inputLength', function () {
        return input.value.length
      })

      lax.addElements("#input", {
        'inputLength': {
          "rotate": [
            [0, 100],
            [0, 360],
          ],
        }
      })
    }
  }

  ngOnInit(): void {

  }
}
