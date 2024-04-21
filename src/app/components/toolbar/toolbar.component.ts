import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToolbarButtonConfig } from '../../app.config';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [materialModules],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  readonly title = 'costapaul.com';

  readonly contact: ToolbarButtonConfig = {
    tooltip: 'Contact',
    matIcon: 'contacts_products',
    onClick: () => this.onContactsClick(),
  };

  private onContactsClick() {
    alert('tbc');
  }
}
