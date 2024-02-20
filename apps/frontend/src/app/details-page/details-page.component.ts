import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonTitle, IonToolbar, IonHeader, IonButtons, IonBackButton } from "@ionic/angular/standalone";

@Component({
  selector: 'nx-understand-details-page',
  standalone: true,
  imports: [IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, CommonModule],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css',
})
export class DetailsPageComponent {}
