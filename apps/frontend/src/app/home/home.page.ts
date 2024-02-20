import { Component, inject } from '@angular/core';
import { IonThumbnail, IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonFooter, IonImg, IonLabel, IonItemDivider, IonItemGroup, IonItem, IonListHeader, IonList, IonNote, IonAvatar, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { NavigationService } from '../shared/services/navigation/navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonFabButton, IonFab, IonAvatar, CommonModule, IonNote, IonThumbnail, IonList, IonListHeader, IonItem, IonItemGroup, IonItemDivider, IonLabel, IonImg, IonFooter, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonText, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  private nav = inject(NavigationService);

  homePage = {
    description: `Supporting the parents & carers of neurodivergent, and potentially neurodivergent, children in Scotland so they can help their children thrive and live happy lives.`,
    title: 'Empowerment Workshop',
    greetings:'Welcome to our workshop!',
    subtitle: 'Core Workshop',
    url: 'www.standuk.co.uk',
    email: 'empowerment@standuk.co.uk'
  }

  modules = [
    {
      id: 1,
      title: 'Core',
      image: 'assets/shapes.svg',
      description: '',
      date: new Date(),
    },
    {
      id: 2,
      title: 'Parents & Carers',
      image: 'assets/shapes.svg',
      description: 'Supporting the parents & carers of neurodivergent, and potentially neurodivergent, children in Scotland so they can help their children thrive and live happy lives.',
      date: new Date(),
    },
    {
      id: 3,
      title: 'Help for children',
      image: 'assets/shapes.svg',
      description: '',
      date: new Date(),
    },
    {
      id: 4,
      title: 'Empowerment Fundamentals',
      image: 'assets/shapes.svg',
      description: 'STAND wants to empower you so that you feel confident to use the existence of rights to influence decisions about, and treatment of, your neurodivergent or potentially neurodivergent children.',
      date: new Date(),
    },
  ]

  navigateDetail() {
    this.nav.navigateFlip('details');
  }

}
