import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {
// Initial list of developer tools
  toolsList: { name: string; version: string; description: string }[] = [
    { name: 'Visual Studio Code', version: '1.75', description: 'A code editor redefined and optimized for building and debugging modern web and cloud applications.' },
    { name: 'Git', version: '2.39', description: 'A distributed version-control system for tracking changes in source code during software development.' },
    { name: 'Docker', version: '20.10', description: 'A platform for developing, shipping, and running applications in containers.' }
  ];

  // Initialize new tool with default values
  newTool = { name: '', version: '', description: '' };

  // Add a new developer tool to the list
  addTool() {
    if (this.newTool.name.trim() && this.newTool.version.trim() && this.newTool.description.trim()) {
      this.toolsList.push({
        name: this.newTool.name,
        version: this.newTool.version,
        description: this.newTool.description
      });
      this.newTool = { name: '', version: '', description: '' };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  // Remove a developer tool by name
  removeTool(name: string) {
    this.toolsList = this.toolsList.filter(tool => tool.name !== name);
  }
}
