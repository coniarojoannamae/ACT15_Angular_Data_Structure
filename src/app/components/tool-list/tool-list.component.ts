import { Component, OnInit } from '@angular/core';
import { ToolService } from './tool-list.service';
import { Tool } from './tool.model';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {
  tools: { name: string, type: string, quantity: number }[] = [];
  newTool = { name: '', type: '', quantity: 0 };

  constructor(private toolService: ToolService) {}

  ngOnInit() {
    this.tools = this.toolService.getTools(); // Fetch the tool list from the service
  }

  // Add a new tool
  addTool() {
    if (this.newTool.name.trim() && this.newTool.type.trim() && this.newTool.quantity > 0) {
      this.toolService.addTool({ ...this.newTool }); // Add tool through the service
      this.newTool = { name: '', type: '', quantity: 0 }; // Reset form after adding
    } else {
      alert('Please enter valid details for the tool.');
    }
  }

  // Remove a tool by name
  removeTool(toolName: string) {
    this.toolService.removeTool(toolName); // Remove tool through the service
    this.tools = this.toolService.getTools(); // Refresh the tool list
  }
}
