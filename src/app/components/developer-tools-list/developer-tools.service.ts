import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeveloperToolsService {
  private toolsList: { name: string; version: string; description: string }[] = [
    {
      name: 'Visual Studio Code',
      version: '1.75',
      description:
        'A code editor redefined and optimized for building and debugging modern web and cloud applications.',
    },
    {
      name: 'Git',
      version: '2.39',
      description:
        'A distributed version-control system for tracking changes in source code during software development.',
    },
    {
      name: 'Docker',
      version: '20.10',
      description:
        'A platform for developing, shipping, and running applications in containers.',
    },
  ];

  // Retrieve the list of tools
  getToolsList() {
    return this.toolsList;
  }

  // Add a new tool
  addTool(tool: { name: string; version: string; description: string }) {
    this.toolsList.push(tool);
  }

  // Remove a tool by name
  removeTool(name: string) {
    this.toolsList = this.toolsList.filter(tool => tool.name !== name);
  }
}
