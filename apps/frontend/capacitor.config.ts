import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'uk.under.stand',
  appName: 'nx-understand',
  webDir: '../../dist/apps/frontend',
  server: {
    androidScheme: 'https'
  }
};

export default config;
