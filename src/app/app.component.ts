import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
  
})
export class AppComponent {
  title = 'chart';
  items: MenuItem[] = [];
    ngOnInit() {
      this.items = [
        {
          label: 'Chart',
          icon: 'pi pi-bitcoin',
          routerLink: '/app-chart'
        },]
    }
}
