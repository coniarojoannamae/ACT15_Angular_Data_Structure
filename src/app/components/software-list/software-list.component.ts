import { Component, OnInit } from '@angular/core';
import { SoftwareService } from './software-list.service';
import { Software } from './software.model';
@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent implements OnInit {
  softwareList: { name: string, version: string, installedDate: string }[] = [];
  newSoftware = { name: '', version: '', installedDate: '' };

  constructor(private softwareService: SoftwareService) {}

  ngOnInit() {
    this.softwareList = this.softwareService.getSoftwareList(); // Fetch the list of software
  }

  // Add new software
  addSoftware() {
    if (this.newSoftware.name.trim() && this.newSoftware.version.trim() && this.newSoftware.installedDate.trim()) {
      this.softwareService.addSoftware({ ...this.newSoftware }); // Add via service
      this.newSoftware = { name: '', version: '', installedDate: '' }; // Reset the form
      this.softwareList = this.softwareService.getSoftwareList(); // Refresh the list
    } else {
      alert('Please enter valid details for the software.');
    }
  }

  // Remove software by name
  removeSoftware(softwareName: string) {
    this.softwareService.removeSoftware(softwareName); // Remove via service
    this.softwareList = this.softwareService.getSoftwareList(); // Refresh the list
  }
}
