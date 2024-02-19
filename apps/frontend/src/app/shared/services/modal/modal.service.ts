import { Injectable, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PrivacyComponent } from 'src/app/components/privacy/privacy.component';
import { TermsOfServiceComponent } from 'src/app/components/terms-of-service/terms-of-service.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalController = inject(ModalController);

  async openModal(component: any) {
    const modal = await this.modalController.create({
      component
    });
    return await modal.present();
  }

  async showPrivacyModal() {
    const modal = await this.modalController.create({
      component: PrivacyComponent
    });
    return await modal.present();
  }

  async showTermsModal() {
    const modal = await this.modalController.create({
      component: TermsOfServiceComponent
    });
    return await modal.present();
  }

}
