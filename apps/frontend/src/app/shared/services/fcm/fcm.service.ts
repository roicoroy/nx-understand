import { inject, Injectable } from '@angular/core';
import { UtilityService } from '../utility/utility.service';
import { PushNotifications } from '@capacitor/push-notifications';
import { AppService } from '../application/application.service';
import { Store } from '@ngxs/store';
import { SettingsState } from 'src/app/store/settings/settings.state';
import { UpdateFormValue } from '@ngxs/form-plugin';

@Injectable({
    providedIn: 'root'
})
export class FcmService {

    private utility = inject(UtilityService);

    private appService = inject(AppService);

    private store = inject(Store);

    async initFCM() {
        const device = await this.appService.getDeviceInfo();
        const fcmAccepted = this.store.selectSnapshot(SettingsState.getIsFcmAccepted);
        this.store.dispatch([
            new UpdateFormValue({
                path: 'settings.settingsForm',
                value: {
                    pushAccepted: fcmAccepted,
                },
            }),
        ]);
        if (device.platform == 'web') {

        }
        if (device.platform === 'android' || device.platform === 'ios') {
            await PushNotifications.addListener('registration', token => {
                console.info('Registration token: ', token.value);
                this.utility.presentAlert(token.value);
            });

            await PushNotifications.addListener('registrationError', err => {
                console.error('Registration error: ', err.error);
                this.utility.presentAlert(err.error);
            });

            await PushNotifications.addListener('pushNotificationReceived', notification => {
                console.log('Push notification received: ', notification);
                this.utility.presentAlert(notification);
            });

            await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
                console.log('Push notification action performed', notification.actionId, notification.inputValue);
                this.utility.presentAlert(notification.inputValue);
                this.utility.presentAlert(notification.actionId);
            });
        }
    }

    async registerNotifications() {
        let permStatus = await PushNotifications.checkPermissions();
        if (permStatus.receive === 'prompt') {
            permStatus = await PushNotifications.requestPermissions();
        }
        if (permStatus.receive !== 'granted') {
            const message = 'User denied permissions!';
            this.utility.presentAlert(message);
            throw new Error(message);
        }
        await PushNotifications.register();
    }

    async getDeliveredNotifications() {
        const notificationList = await PushNotifications.getDeliveredNotifications();
        console.log('delivered notifications', notificationList);
    }
}
