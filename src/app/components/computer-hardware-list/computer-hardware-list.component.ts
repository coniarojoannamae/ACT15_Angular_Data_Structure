import { Component } from '@angular/core';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {
  // Initial list of hardware components
  hardwareList: { componentName: string, type: string, brand: string, price: number }[] = [
    { componentName: 'Ryzen 5 5600X', type: 'Processor', brand: 'AMD', price: 300 },
    { componentName: 'RTX 3080', type: 'Graphics Card', brand: 'NVIDIA', price: 700 },
    { componentName: 'Vengeance LPX 16GB', type: 'RAM', brand: 'Corsair', price: 80 }
  ];

  // Initialize new hardware component with default values
  newHardware = { componentName: '', type: '', brand: '', price: 0 };

  // Add a new hardware component to the list
  addHardware() {
    if (this.newHardware.componentName.trim() && this.newHardware.type.trim() && this.newHardware.brand.trim() && this.newHardware.price > 0) {
      this.hardwareList.push({ ...this.newHardware });
      this.newHardware = { componentName: '', type: '', brand: '', price: 0 };  // Reset the form
    } else {
      alert('Please fill in all the details for the hardware component.');
    }
  }

  // Remove a hardware component by componentName
  removeHardware(componentName: string) {
    this.hardwareList = this.hardwareList.filter(hardware => hardware.componentName !== componentName);
  }
}
