import { Component } from '@angular/core';
import { ComputerHardwareService } from './computer-hardware.service';
import { HardwareComponent } from './hardware.model';
@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrls: ['./computer-hardware-list.component.css']
})
export class ComputerHardwareListComponent {
  hardwareList: { componentName: string, type: string, brand: string, price: number }[] = [];
  newHardware = { componentName: '', type: '', brand: '', price: 0 };

  constructor(private hardwareService: ComputerHardwareService) {
    this.hardwareList = this.hardwareService.getHardwareList(); // Load hardware list from service
  }

  addHardware() {
    if (this.newHardware.componentName.trim() && this.newHardware.type.trim() && this.newHardware.brand.trim() && this.newHardware.price > 0) {
      this.hardwareService.addHardware({ ...this.newHardware });
      this.newHardware = { componentName: '', type: '', brand: '', price: 0 };  // Reset form
      this.hardwareList = this.hardwareService.getHardwareList(); // Refresh the list
    } else {
      alert('Please fill in all the details for the hardware component.');
    }
  }

  removeHardware(componentName: string) {
    this.hardwareService.removeHardware(componentName);
    this.hardwareList = this.hardwareService.getHardwareList(); // Refresh the list
  }
}
