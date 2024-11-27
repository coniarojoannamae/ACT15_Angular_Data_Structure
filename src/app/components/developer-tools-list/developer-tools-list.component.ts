import { Component, OnInit } from '@angular/core';
import { DeveloperToolsService } from './developer-tools.service';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrls: ['./developer-tools-list.component.css'],
})
export class DeveloperToolsListComponent implements OnInit {
  toolsList: { name: string; version: string; description: string }[] = [];
  newTool = { name: '', version: '', description: '' };

  constructor(private toolsService: DeveloperToolsService) {}

  ngOnInit() {
    this.toolsList = this.toolsService.getToolsList();
  }

  addTool() {
    if (
      this.newTool.name.trim() &&
      this.newTool.version.trim() &&
      this.newTool.description.trim()
    ) {
      this.toolsService.addTool({
        name: this.newTool.name,
        version: this.newTool.version,
        description: this.newTool.description,
      });
      this.newTool = { name: '', version: '', description: '' }; // Reset the form
      this.toolsList = this.toolsService.getToolsList(); // Refresh the list
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  removeTool(name: string) {
    this.toolsService.removeTool(name);
    this.toolsList = this.toolsService.getToolsList(); // Refresh the list
  }
}
