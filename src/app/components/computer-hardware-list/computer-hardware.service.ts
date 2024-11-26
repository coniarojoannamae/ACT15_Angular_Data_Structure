import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputerHardwareService {
  private hardwareList: { componentName: string, type: string, brand: string, price: number }[] = [
    { componentName: 'Ryzen 5 5600X', type: 'Processor', brand: 'AMD', price: 300 },
    { componentName: 'RTX 3080', type: 'Graphics Card', brand: 'NVIDIA', price: 700 },
    { componentName: 'Vengeance LPX 16GB', type: 'RAM', brand: 'Corsair', price: 80 }
  ];

  // Retrieve the list of hardware components
  getHardwareList() {
    return this.hardwareList;
  }

  // Add a new hardware component to the list
  addHardware(hardware: { componentName: string, type: string, brand: string, price: number }) {
    this.hardwareList.push(hardware);
  }

  // Remove a hardware component by name
  removeHardware(componentName: string) {
    this.hardwareList = this.hardwareList.filter(hardware => hardware.componentName !== componentName);
  }
}
