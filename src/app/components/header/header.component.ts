import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule],
  template: `
    <header class="gh-header">
      <div class="inner">
        <div class="left">
          <div class="logo">🐙</div>
          <div class="brand">GitHub</div>
        </div>
        <div class="search"><input placeholder="Type / to search" /></div>
        <div class="right">
          <div class="avatar"></div>
        </div>
      </div>
      <nav class="top-tabs">
        <button class="active">Overview</button>
        <button>Repositories</button>
        <button>Projects</button>
        <button>Packages</button>
      </nav>
      <div class="token-banner" *ngIf="!gh.hasToken()">
        Live data disabled — set NG_APP_GH_TOKEN in localStorage or environment.ts to enable GraphQL contributions.
      </div>
    </header>
  `,
  styles: [`
    .gh-header{position:sticky;top:0;background:#fff;border-bottom:1px solid #eaecef;z-index:10}
    .inner{max-width:1012px;margin:0 auto;display:flex;gap:12px;align-items:center;padding:8px 16px}
    .left{display:flex;align-items:center;gap:8px}
    .logo{font-size:20px}
    .brand{font-weight:600}
    .search{flex:1}
    .search input{width:100%;padding:6px 10px;border:1px solid #d0d7de;border-radius:6px}
    .right .avatar{width:28px;height:28px;border-radius:50%;background:#dde1e6}
    .top-tabs{max-width:1012px;margin:0 auto;display:flex;gap:8px;padding:8px 16px}
    .top-tabs button{padding:6px 12px;border-radius:6px;border:1px solid #d0d7de;background:#fff;cursor:pointer}
    .top-tabs .active{background:#0969da;border-color:#0969da;color:#fff}
    .token-banner{background:#fff3cd;color:#663c00;border-top:1px solid #ffe69c;padding:6px 16px;font-size:12px}
  `]
})
export class HeaderComponent { constructor(public gh: GithubService){} }
