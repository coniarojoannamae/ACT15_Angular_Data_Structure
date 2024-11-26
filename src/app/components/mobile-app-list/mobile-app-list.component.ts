import { Component } from '@angular/core';
import { MobileAppService } from './mobile-app.service';
import { MobileApp } from './mobile-app.model';
@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrls: ['./mobile-app-list.component.css']
})
export class MobileAppListComponent {
  appList: { appName: string, category: string, developer: string, size: number }[] = [];
  newApp = { appName: '', category: '', developer: '', size: 0 };

  constructor(private mobileAppService: MobileAppService) {
    this.appList = this.mobileAppService.getAppList(); // Load app list from service
  }

  addApp() {
    if (this.newApp.appName.trim() && this.newApp.category.trim() && this.newApp.developer.trim() && this.newApp.size > 0) {
      this.mobileAppService.addApp({ ...this.newApp });
      this.newApp = { appName: '', category: '', developer: '', size: 0 }; // Reset the form
      this.appList = this.mobileAppService.getAppList(); // Refresh the list
    } else {
      alert('Please fill in all the details for the mobile app.');
    }
  }

  removeApp(appName: string) {
    this.mobileAppService.removeApp(appName);
    this.appList = this.mobileAppService.getAppList(); // Refresh the list
  }
}
