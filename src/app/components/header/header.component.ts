import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';
import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule],
  template: `
    <header class="gh-header">
      <div class="bar">
        <div class="left">
          <button class="btn" aria-label="Menu">
            <svg viewBox="0 0 16 16" class="ico"><path d="M1 3.25A.75.75 0 0 1 1.75 2.5h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 3.25Zm0 4A.75.75 0 0 1 1.75 6.5h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.25Zm0 4a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75Z"/></svg>
          </button>
          <svg viewBox="0 0 16 16" class="gh-mark"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33C3.73 14.59 3.27 13 3.27 13c-.36-.93-.89-1.18-.89-1.18-.73-.5.06-.49.06-.49.81.06 1.24.84 1.24.84.72 1.23 1.89.87 2.35.66.07-.52.28-.87.51-1.07-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 8 3.87c.85 0 1.71.12 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.21 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
          <span class="username">{{ username }}</span>
        </div>

        <div class="search">
          <svg viewBox="0 0 16 16" class="ico muted"><path d="M11.5 7a4.5 4.5 0 1 1-1.003-2.82l3.661 3.66a.75.75 0 1 1-1.06 1.061L9.44 5.24C9.158 4.95 8.757 4.75 8.312 4.75A3.562 3.562 0 1 0 11.875 8.31c0-.445-.2-.846-.49-1.128L11.5 7Z"/></svg>
          <input placeholder="Type / to search" aria-label="Search" />
          <kbd>/</kbd>
        </div>

        <div class="actions">
          <button class="btn" aria-label="Settings"><svg viewBox="0 0 16 16" class="ico"><path d="M8 5.5A2.5 2.5 0 1 0 8 10.5 2.5 2.5 0 0 0 8 5.5Zm7 2a1 1 0 0 0-.55-.89l-1.22-.61.13-1.36A1 1 0 0 0 12.5 2.9l-1.3.67-.98-.98A1 1 0 0 0 8.88 2H7.12a1 1 0 0 0-.7.29l-.98.98-1.3-.67a1 1 0 0 0-1.86.74l.13 1.36-1.22.61a1 1 0 0 0 0 1.78l1.22.61-.13 1.36a1 1 0 0 0 1.45 1.02l1.3-.67.98.98c.18.18.43.29.7.29h1.76c.26 0 .51-.11.7-.29l.98-.98 1.3.67a1 1 0 0 0 1.45-1.02l-.13-1.36 1.22-.61c.34-.17.55-.52.55-.89Z"/></svg></button>
          <button class="btn" aria-label="Add"><svg viewBox="0 0 16 16" class="ico"><path d="M8.75 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7.25v4.25a.75.75 0 0 0 1.5 0V8.5h4.25a.75.75 0 0 0 0-1.5H8.75V2.75Z"/></svg></button>
          <button class="btn" aria-label="Issues"><svg viewBox="0 0 16 16" class="ico"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm.75 9.75h-1.5v-1.5h1.5v1.5Zm0-3H7.25v-3h1.5v3Z"/></svg></button>
          <button class="btn" aria-label="Notifications"><svg viewBox="0 0 16 16" class="ico"><path d="M8 1.75a3.75 3.75 0 0 0-3.75 3.75v2.5l-1 1V10h11.5V9l-1-1V5.5A3.75 3.75 0 0 0 8 1.75Zm0 12.5a2 2 0 0 0 1.98-1.75H6.02A2 2 0 0 0 8 14.25Z"/></svg></button>
          <div class="avatar"><span class="dot"></span></div>
        </div>
      </div>

      <nav class="tabs">
        <a class="tab active"><svg viewBox="0 0 16 16" class="ico muted"><path d="M1.75 2.5h12.5a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V3.25a.75.75 0 0 1 .75-.75Zm.75 1.5v8h11V4Z"/></svg> Overview</a>
        <a class="tab"><svg viewBox="0 0 16 16" class="ico muted"><path d="M4 3.75A.75.75 0 0 1 4.75 3h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 3.75ZM3.25 6h9.5v7.25H3.25Z"/></svg> Repositories <span class="count">{{ repoCount }}</span></a>
        <a class="tab"><svg viewBox="0 0 16 16" class="ico muted"><path d="M2.75 2.5h10.5a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75V3.25a.75.75 0 0 1 .75-.75Zm1 2v7h8.5v-7Z"/></svg> Projects</a>
        <a class="tab"><svg viewBox="0 0 16 16" class="ico muted"><path d="M1.75 2.5h12.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H6.5l-2.5 2.5v-2.5H1.75a.75.75 0 0 1-.75-.75V3.25a.75.75 0 0 1 .75-.75Z"/></svg> Packages <span class="count">{{ packagesCount }}</span></a>
        <a class="tab"><svg viewBox="0 0 16 16" class="ico muted"><path d="M8 12.027 3.472 14.5l.865-5.036L1 5.972l5.236-.762L8 0l1.764 5.21L15 5.972l-3.337 3.492.865 5.036L8 12.027Z"/></svg> Stars <span class="count">{{ starsCount }}</span></a>
      </nav>

      <div class="token-banner" *ngIf="!gh.hasToken()">
        Live data disabled — set NG_APP_GH_TOKEN in localStorage or environment.ts to enable GraphQL contributions.
      </div>
    </header>
  `,
  styles: [`
    .gh-header{position:sticky;top:0;background:#fff;border-bottom:1px solid #d0d7de;z-index:10}
    .bar{max-width:1012px;margin:0 auto;display:flex;align-items:center;gap:12px;padding:10px 16px}
    .left{display:flex;align-items:center;gap:10px}
    .gh-mark{width:20px;height:20px;fill:#24292f}
    .username{font-weight:600;color:#24292f}
    .btn{width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;border:1px solid #d0d7de;background:#fff;border-radius:6px;cursor:pointer}
    .ico{width:16px;height:16px;fill:#24292f}
    .muted{fill:#57606a}
    .search{flex:1;display:flex;align-items:center;gap:8px;border:1px solid #d0d7de;border-radius:6px;padding:6px 10px;background:#f6f8fa;min-width:280px;max-width:560px;margin-left:8px;margin-right:8px}
    .search input{flex:1;border:0;outline:none;background:transparent;color:#24292f}
    kbd{background:#f6f8fa;border:1px solid #d0d7de;border-bottom-color:#b9c1c9;border-radius:6px;padding:2px 6px;font-size:12px;color:#57606a}
    .actions{display:flex;align-items:center;gap:8px}
    .avatar{width:28px;height:28px;border-radius:50%;background:#e5e9f0;position:relative;border:1px solid #d0d7de}
    .avatar .dot{position:absolute;right:-1px;top:-1px;width:8px;height:8px;border-radius:50%;background:#0969da;border:2px solid #fff}

    .tabs{max-width:1012px;margin:0 auto;display:flex;gap:20px;padding:10px 16px;position:relative;border-bottom:1px solid #d0d7de}
    .tab{position:relative;display:inline-flex;align-items:center;gap:6px;padding:6px 0;color:#57606a;text-decoration:none}
    .tab .count{margin-left:6px;background:#eaeef2;border-radius:999px;padding:0 6px;font-size:12px;color:#57606a;line-height:18px;height:18px;display:inline-flex;align-items:center}
    .tab.active{color:#24292f}
    .tab.active::after{content:'';position:absolute;left:0;right:0;bottom:-11px;height:2px;background:#fd8c73;border-radius:2px}

    .token-banner{background:#fff3cd;color:#663c00;border-top:1px solid #ffe69c;padding:6px 16px;font-size:12px}
  `]
})
export class HeaderComponent {
  username = environment.githubUsername;
  repoCount = 31;
  packagesCount = 6;
  starsCount = 6;
  constructor(public gh: GithubService){}
}
