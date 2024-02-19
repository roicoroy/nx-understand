import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonText, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  text = `Supporting the parents & carers of neurodivergent, and potentially neurodivergent, children in Scotland so they can help their children thrive and live happy lives.`;
  constructor() { }
}
