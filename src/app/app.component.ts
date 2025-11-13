import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileLeftComponent } from './components/profile-left/profile-left.component';
import { ContributionsChartComponent } from './components/contributions-chart/contributions-chart.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { ReposGridComponent } from './components/repos-grid/repos-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProfileLeftComponent,
    ContributionsChartComponent,
    TabsComponent,
    HeaderComponent,
    ReposGridComponent
  ],
  template: `
  <app-header></app-header>
  <div class="page">
    <div class="container">
      <aside class="left">
        <app-profile-left></app-profile-left>
      </aside>

      <main class="right">
        <app-repos-grid></app-repos-grid>
        <section class="card">
          <app-contributions-chart></app-contributions-chart>
          <div class="hr"></div>
          <section class="activity-overview in-card" aria-labelledby="ao-title">
            <header class="card-header">
              <h3 id="ao-title">Activity overview</h3>
            </header>
            <div class="ao-body">
              <div class="ao-left">
                <ul class="activity-list">
                  <li>
                    <span class="dot" aria-hidden="true"></span>
                    <div class="activity-text">
                      Contributed to
                      <a href="#">UptimeAI/Uptime_webapp</a>, 
                      <a href="#">UptimeAI/Uptime_server</a>, 
                      <a href="#">UptimeAI/Uptime_ml</a>, and 13 other repositories
                    </div>
                  </li>
                </ul>
              </div>
              <div class="ao-right" aria-hidden="true">
                <div class="radar">
                  <!-- viewBox 0..240 width, keep shapes inside -->
                  <svg viewBox="0 0 240 160" class="radar-svg" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Contribution radar">
                    <!-- axes -->
                    <line x1="120" y1="10" x2="120" y2="150" class="axis"/>
                    <line x1="10" y1="80" x2="230" y2="80" class="axis"/>
                    <!-- polygon points adjusted to fit viewBox -->
                    <polygon points="35,88 120,30 205,80 120,135" class="poly"/>
                    <circle cx="35" cy="88" r="3" class="dot"/>
                    <circle cx="120" cy="30" r="3" class="dot"/>
                    <circle cx="205" cy="80" r="3" class="dot"/>
                    <circle cx="120" cy="135" r="3" class="dot hollow"/>
                    <!-- use tspans for multiline text -->
                    <text x="20" y="70" class="lbl">
                      <tspan x="20" dy="0">83%</tspan>
                      <tspan x="20" dy="14">Commits</tspan>
                    </text>
                    <text x="170" y="76" class="lbl">Issues</text>
                    <text x="118" y="22" class="lbl">Code review</text>
                    <text x="100" y="154" class="lbl">
                      <tspan x="100" dy="0">17%</tspan>
                      <tspan x="100" dy="14">Pull requests</tspan>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </section>

        <!-- Contribution activity -->
        <section class="card contrib-activity">
          <header class="card-header"><h3>Contribution activity</h3></header>
          <div class="month">October 2025</div>
          <div class="feed">
            <div class="feed-item">
              <div class="icon" aria-hidden="true">⬛</div>
              <div class="content">
                <div class="title">Created 56 commits in 11 repositories</div>
              </div>
            </div>
            <div class="feed-item">
              <div class="icon" aria-hidden="true">⬛</div>
              <div class="content">
                <div class="title">Opened 29 pull requests in 5 repositories</div>
              </div>
            </div>
          </div>
          <div class="show-more">
            <button>Show more activity</button>
          </div>
        </section>
      
      </main>
    </div>
  </div>

  <footer class="site-footer" aria-label="Site footer">
    <div class="inner">
      <div class="brand">
        <svg viewBox="0 0 16 16" class="mark" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33C3.73 14.59 3.27 13 3.27 13c-.36-.93-.89-1.18-.89-1.18-.73-.5.06-.49.06-.49.81.06 1.24.84 1.24.84.72 1.23 1.89.87 2.35.66.07-.52.28-.87.51-1.07-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 8 3.87c.85 0 1.71.12 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.21 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
        <span> {{ year }} GitHub, Inc.</span>
      </div>
      <nav class="links" aria-label="Footer links">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Security</a>
        <a href="#">Status</a>
        <a href="#">Community</a>
        <a href="#">Docs</a>
        <a href="#">Contact</a>
        <a href="#">Manage cookies</a>
        <a href="#">Do not share my personal information</a>
      </nav>
    </div>
  </footer>
  `,
  
  styles: [`
    :host{display:block}
    .page{background:var(--bg)}
    .container{max-width:1012px;margin:0 auto;display:flex;gap:24px;padding:24px;flex-wrap:nowrap;align-items:flex-start}
    .left{flex:0 0 296px;max-width:296px}
    .card{margin-top:16px;background:#fff;border-radius:6px;border:1px solid #d0d7de;padding:12px}
    .card .hr{height:1px;background:#d0d7de;margin:12px -12px}
    .right{flex:1;min-width:0}
    @media (max-width:800px){
      .container{flex-direction:column;flex-wrap:wrap}
      .left{width:100%;max-width:none}
    }

    /* Activity overview */
    .card-header h3{margin:0;font-size:16px}
    .activity-overview.in-card{overflow:visible}
    .activity-overview.in-card .ao-body{
      display:grid;
      grid-template-columns:1fr minmax(200px,280px);
      gap:12px;
      align-items:center;
    }

    .activity-overview.in-card .ao-right{
      border-left:1px solid #d0d7de;
      padding-left:12px;
      width:280px;
      overflow:hidden;
      display:flex;
      align-items:center;
      justify-content:center;
      min-width:200px; /* ensure radar has space */
    }

    .activity-list{margin:0;padding:0;list-style:none;color:var(--text)}
    .activity-list li{
      display:flex;
      gap:8px;
      align-items:flex-start;
      margin:0;
    }

    /* make text wrap inside the available space */
    .activity-text{
      word-break:break-word;
      hyphens:auto;
      line-height:1.3;
      color:var(--text);
      max-width:100%;
    }

    .activity-list a{color:#0969da;text-decoration:none;white-space:nowrap}
    .activity-list a:hover{text-decoration:underline}

    .activity-list .dot{width:10px;height:10px;border-radius:50%;background:#d0d7de;margin-top:6px;flex:0 0 10px}
    .radar{height:160px;display:flex;align-items:center;justify-content:center;max-width:100%}
    .radar-svg{width:100%;height:160px;max-width:100%}
    .axis{stroke:#1f883d;stroke-width:2;opacity:.9}
    .poly{fill:#2da44e33;stroke:#1f883d;stroke-width:2}
    .dot{fill:#1f883d}
    .dot.hollow{fill:#fff;stroke:#1f883d;stroke-width:2}
    .lbl{fill:#1f883d;font-size:12px}
    @media (max-width:900px){
      .activity-overview .ao-body{grid-template-columns:1fr}
      .activity-overview .ao-right{border-left:none;padding-left:0;padding-top:12px}
    }

    /* Contribution activity feed */
    .contrib-activity .month{margin:8px 0 12px 0;color:#57606a;font-size:12px}
    .feed{display:flex;flex-direction:column;gap:12px}
    .feed-item{display:flex;gap:12px}
    .feed-item .icon{width:24px;display:flex;align-items:flex-start;justify-content:center;color:#57606a}
    .feed-item .title{font-weight:600}
    .show-more{margin-top:12px}
    .show-more button{padding:6px 12px;border:1px solid #d0d7de;border-radius:6px;background:#fff;cursor:pointer}

    /* Footer */
    .site-footer{border-top:1px solid #d0d7de;margin-top:24px;padding:24px 16px;background:#fff}
    .site-footer .inner{max-width:1012px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
    .site-footer .brand{display:flex;align-items:center;gap:8px;color:#57606a}
    .site-footer .brand .mark{width:20px;height:20px;fill:#57606a}
    .site-footer .links{display:flex;gap:16px;flex-wrap:wrap}
    .site-footer .links a{color:#57606a;text-decoration:none;font-size:12px}
    .site-footer .links a:hover{text-decoration:underline}
  `]
})
export class AppComponent {
  title = 'github-profile-angular';
  year = new Date().getFullYear();
}
