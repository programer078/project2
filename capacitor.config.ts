import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'project1',
  webDir: 'www',
  plugins: {
    Camera: {
      permissions: ["camera", "photos"]
    }
  }
};

export default config;
