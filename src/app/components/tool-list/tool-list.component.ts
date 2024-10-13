import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  // Initial list of tools in the workshop
  tools: { name: string, type: string, quantity: number }[] = [

    { name: 'Drill', type: 'Power Tool', quantity: 5 },
    { name: 'Screwdriver', type: 'Hand Tool', quantity: 20 },
    { name: 'Saw', type: 'Hand Tool', quantity: 7 }
  ];

  // Initialize new tool with default values
  newTool = { name: '', type: '', quantity: 0 };

  // Add a new tool
  addTool() {
    if (this.newTool.name.trim() && this.newTool.type.trim() && this.newTool.quantity > 0) {
      this.tools.push({ ...this.newTool });
      this.newTool = { name: '', type: '', quantity: 0 };  // Reset the form
    } else {
      alert('Please enter valid details for the tool.');
    }
  }

  // Remove a tool by name
  removeTool(toolName: string) {
    this.tools = this.tools.filter(tool => tool.name !== toolName);
  }
}
