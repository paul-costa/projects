import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../app.config';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

const materialModules = [MatIconModule, MatCardModule];
const components = [ToolbarComponent];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, materialModules, components],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  readonly projects: Project[] = [
    {
      id: 'pain-diary',
      title: 'Pain Diary',
      matIcon: 'zone_person_alert',
      link: 'https://pain-diary-88de2.web.app/',
    },
    {
      id: 'none',
      title: 'TBC',
      matIcon: 'more_horiz',
    },
  ];

  onOpenProject(project: Project) {
    if (project.link) {
      window.open(project.link, '_blank')?.focus();
    }
  }
}
