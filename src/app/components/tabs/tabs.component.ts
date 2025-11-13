import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tabs',
  imports: [CommonModule],
  template: `

  `,
  styles: [`
    .tabs{display:flex;gap:8px;margin-bottom:12px}
    .tabs button{padding:8px 12px;border-radius:6px;border:1px solid #ddd;background:#fff;cursor:pointer}
    .tabs button.active{background:#0366d6;color:#fff;border-color:#0366d6}
  `]
})
export class TabsComponent {
  active = signal<'repos' | 'projects' | 'packages'>('repos');
}
