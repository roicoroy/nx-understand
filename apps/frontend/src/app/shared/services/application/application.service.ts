import { Injectable, NgZone, inject } from '@angular/core';
import { BatteryInfo, Device, DeviceId, DeviceInfo, GetLanguageCodeResult } from '@capacitor/device';
import { App, AppInfo, AppState, URLOpenListenerEvent } from '@capacitor/app';
import { AppLauncher } from '@capacitor/app-launcher';
import { Platform, isPlatform } from '@ionic/angular';

export const packageUrl = 'app://uk.shop.mobile';
const iosOrAndroid = isPlatform('hybrid');

export const callbackUri = iosOrAndroid
    ? `packagepackage`
    : 'http://localhost:4200';


@Injectable({
    providedIn: 'root'
})
export class AppService {

    private platform = inject(Platform);

    private zone = inject(NgZone);

    async isBrowser(): Promise<boolean> {
        const isBrowser: boolean = await this.platform.is('mobileweb') || this.platform.is('desktop');
        return isBrowser;
    }

    async initAppListeners() {
        console.log('appUrlOpen listener init AppService')
        await App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
            // console.log('appUrlOpen listener init AppService',);
            // console.log(event);
            this.zone.run(() => {
                // console.log('appUrlOpen zone run');
                const slug = event.url.split(".app").pop();
                // console.log(slug);
            });
        });
        await App.addListener('appStateChange', (state: AppState) => {
            console.log(state);
        });
    }

    async canOpenUrl(url: string): Promise<{ value: boolean }> {
        return AppLauncher.canOpenUrl({ url });
    }

    async exitApp(): Promise<void> {
        return App.exitApp();
    }
    async getLaunchUrl(): Promise<string> {
        const result: any = await App.getLaunchUrl();

        return result.url;
    }
    async openUrl(url: string): Promise<{ completed: boolean }> {
        return AppLauncher.openUrl({ url });
    }

    async getDeviceId(): Promise<DeviceId> {
        return Device.getId();
    }

    async getDeviceInfo(): Promise<DeviceInfo> {
        return Device.getInfo();
    }

    async getDeviceBatteryInfo(): Promise<BatteryInfo> {
        return Device.getBatteryInfo();
    }

    async getDeviceLanguageCode(): Promise<GetLanguageCodeResult> {
        return Device.getLanguageCode();
    }
    async getAppInfo(): Promise<AppInfo> {
        return App.getInfo();
    }
}
