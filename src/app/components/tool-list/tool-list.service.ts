import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private tools: { name: string, type: string, quantity: number }[] = [
    { name: 'Drill', type: 'Power Tool', quantity: 5 },
    { name: 'Screwdriver', type: 'Hand Tool', quantity: 20 },
    { name: 'Saw', type: 'Hand Tool', quantity: 7 }
  ];

  // Get the list of tools
  getTools() {
    return this.tools;
  }

  // Add a new tool
  addTool(tool: { name: string, type: string, quantity: number }) {
    this.tools.push(tool);
  }

  // Remove a tool by name
  removeTool(toolName: string) {
    this.tools = this.tools.filter(tool => tool.name !== toolName);
  }
}
