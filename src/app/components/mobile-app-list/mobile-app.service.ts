import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileAppService {
  private appList: { appName: string, category: string, developer: string, size: number }[] = [
    { appName: 'WhatsApp', category: 'Messaging', developer: 'Meta', size: 100 },
    { appName: 'Instagram', category: 'Social Media', developer: 'Meta', size: 150 },
    { appName: 'Spotify', category: 'Music', developer: 'Spotify AB', size: 200 }
  ];

  // Get the list of mobile apps
  getAppList() {
    return this.appList;
  }

  // Add a new app to the list
  addApp(app: { appName: string, category: string, developer: string, size: number }) {
    this.appList.push(app);
  }

  // Remove an app by its name
  removeApp(appName: string) {
    this.appList = this.appList.filter(app => app.appName !== appName);
  }
}
