import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {
  private softwareList: { name: string, version: string, installedDate: string }[] = [
    { name: 'Google Chrome', version: '95.0.4638.69', installedDate: '2024-01-15' },
    { name: 'Microsoft Office', version: '2021', installedDate: '2024-02-10' },
    { name: 'Adobe Photoshop', version: '2022.4', installedDate: '2023-12-01' },
    { name: 'Visual Studio Code', version: '1.72.0', installedDate: '2024-03-20' }
  ];

  // Retrieve the list of software
  getSoftwareList() {
    return this.softwareList;
  }

  // Add a new software
  addSoftware(software: { name: string, version: string, installedDate: string }) {
    this.softwareList.push(software);
  }

  // Remove a software by name
  removeSoftware(softwareName: string) {
    this.softwareList = this.softwareList.filter(software => software.name !== softwareName);
  }
}
