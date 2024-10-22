import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
  // Initial list of mobile apps
  appList: { appName: string, category: string, developer: string, size: number }[] = [
    { appName: 'WhatsApp', category: 'Messaging', developer: 'Meta', size: 100 },
    { appName: 'Instagram', category: 'Social Media', developer: 'Meta', size: 150 },
    { appName: 'Spotify', category: 'Music', developer: 'Spotify AB', size: 200 }
  ];

  // Initialize new mobile app with default values
  newApp = { appName: '', category: '', developer: '', size: 0 };

  // Add a new app to the list
  addApp() {
    if (this.newApp.appName.trim() && this.newApp.category.trim() && this.newApp.developer.trim() && this.newApp.size > 0) {
      this.appList.push({ ...this.newApp });
      this.newApp = { appName: '', category: '', developer: '', size: 0 };  // Reset the form
    } else {
      alert('Please fill in all the details for the mobile app.');
    }
  }

  // Remove an app by appName
  removeApp(appName: string) {
    this.appList = this.appList.filter(app => app.appName !== appName);
  }
}
