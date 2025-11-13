import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Repo = {
  name: string;
  description?: string;
  language?: string;
  visibility?: 'Public' | 'Private';
  stars?: number;
  forks?: number;
};

@Component({
  standalone: true,
  selector: 'app-repos-grid',
  imports: [CommonModule],
  template: `
    <section class="repos">
      <div class="header">
        <h3>Popular repositories</h3>
        <a class="link" href="#">Customize your pins</a>
      </div>
      <div class="grid">
        <article class="card" *ngFor="let r of repos">
          <div class="card-top">
            <a class="repo-name" href="#">{{ r.name }}</a>
            <span class="badge" *ngIf="r.visibility">{{ r.visibility }}</span>
          </div>
          <p class="desc" *ngIf="r.description">{{ r.description }}</p>
          <div class="meta">
            <span *ngIf="r.language">{{ r.language }}</span>
            <span *ngIf="r.stars">★ {{ r.stars }}</span>
            <span *ngIf="r.forks">⑂ {{ r.forks }}</span>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .repos{background:transparent}
    .header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
    .header h3{margin:0;font-size:16px}
    .header .link{font-size:12px;color:#57606a;text-decoration:none}
    .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
    .card{background:#fff;border:1px solid #d0d7de;border-radius:6px;padding:16px}
    .card-top{display:flex;align-items:center;gap:8px;margin-bottom:6px}
    .repo-name{font-weight:600;color:#0969da;text-decoration:none}
    .badge{border:1px solid #d0d7de;border-radius:999px;padding:2px 8px;font-size:12px;color:#57606a}
    .desc{color:#57606a;margin:4px 0 10px 0;font-size:13px}
    .meta{display:flex;gap:12px;color:#57606a;font-size:12px}
    @media (max-width:900px){.grid{grid-template-columns:1fr}}
  `]
})

export class ReposGridComponent {
  @Input() repos: Repo[] = [
    { name: 'Complete-Python-3-Bootcamp', description: 'Course resources', language: 'Jupyter Notebook', visibility: 'Public', stars: 12 },
    { name: 'flutter_login_ui', description: 'Flutter login UI', language: 'Dart', visibility: 'Public', stars: 8 },
    { name: 'gitignore', description: 'A collection of useful .gitignore templates', language: '', visibility: 'Public', stars: 5 },
    { name: 'node-opcuo-logger', description: 'OPCUA logging lib', language: 'TypeScript', visibility: 'Public', stars: 3 },
    { name: 'kafkajs', description: 'A modern Apache Kafka client for node.js', language: 'JavaScript', visibility: 'Public', stars: 20 },
    { name: 'node-opcuu-1', description: 'Demo project', language: 'TypeScript', visibility: 'Public', stars: 2 },
  ];
}
