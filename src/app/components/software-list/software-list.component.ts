import { Component } from '@angular/core';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  // Initial list of installed software
  softwareList: { name: string, version: string, installedDate: string }[] = [
    { name: 'Google Chrome', version: '95.0.4638.69', installedDate: '2024-01-15' },
    { name: 'Microsoft Office', version: '2021', installedDate: '2024-02-10' },
    { name: 'Adobe Photoshop', version: '2022.4', installedDate: '2023-12-01' }, { name: 'Visual Studio Code', version: '1.72.0', installedDate: '2024-03-20' }
  ];

  // Initialize new software with default values
  newSoftware = { name: '', version: '', installedDate: '' };

  // Add a new software
  addSoftware() {
    if (this.newSoftware.name.trim() && this.newSoftware.version.trim() && this.newSoftware.installedDate.trim()) {
      this.softwareList.push({ ...this.newSoftware });
      this.newSoftware = { name: '', version: '', installedDate: '' };  // Reset the form
    } else {
      alert('Please enter valid details for the software.');
    }
  }

  // Remove a software by name
  removeSoftware(softwareName: string) {
    this.softwareList = this.softwareList.filter(software => software.name !== softwareName);
  }
}
