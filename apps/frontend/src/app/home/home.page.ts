import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonText, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  homePage = {
    description: `Supporting the parents & carers of neurodivergent, and potentially neurodivergent, children in Scotland so they can help their children thrive and live happy lives.`,
    title: 'Empowerment Workshop',
    subtitle: 'Core Workshop',
    url: 'www.standuk.co.uk',
    email: 'empowerment@standuk.co.uk'
  }

}
