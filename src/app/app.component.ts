import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileLeftComponent } from './components/profile-left/profile-left.component';
import { ContributionsChartComponent } from './components/contributions-chart/contributions-chart.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { ReposGridComponent } from './components/repos-grid/repos-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileLeftComponent, ContributionsChartComponent, TabsComponent, HeaderComponent, ReposGridComponent],
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
        </section>
        <!-- Activity overview -->
        <section class="card activity-overview">
          <header class="card-header">
            <h3>Activity overview</h3>
          </header>
          <div class="ao-body">
            <div class="ao-left">
              <ul class="activity-list">
                <li>
                  <span class="dot"></span>
                  Contributed to <a href="#">UptimeAI/Uptime_webapp</a>, <a href="#">UptimeAI/Uptime_server</a>, <a href="#">UptimeAI/Uptime_ml</a>, and 13 other repositories
                </li>
              </ul>
            </div>
            <div class="ao-right">
              <div class="spider-placeholder">Code review<br/>Issues<br/>Commits<br/>Pull requests</div>
            </div>
          </div>
        </section>

        <!-- Contribution activity -->
        <section class="card contrib-activity">
          <header class="card-header"><h3>Contribution activity</h3></header>
          <div class="month">October 2025</div>
          <div class="feed">
            <div class="feed-item">
              <div class="icon">⬛</div>
              <div class="content">
                <div class="title">Created 56 commits in 11 repositories</div>
              </div>
            </div>
            <div class="feed-item">
              <div class="icon">⬛</div>
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
  </div>`,
  styles: [`
    .page{background:var(--bg)}
    .container{max-width:1012px;margin:0 auto;display:flex;gap:24px;padding:24px;flex-wrap:wrap}
    .left{flex:0 0 296px;max-width:296px}
    .card{margin-top:16px;background:#fff;border-radius:6px;border:1px solid #d0d7de;padding:12px}
    .right{flex:1}
    @media (max-width:800px){
      .container{flex-direction:column}
      .left{width:100%}
    }
    /* Activity overview */
    .card-header h3{margin:0;font-size:16px}
    .activity-overview .ao-body{display:grid;grid-template-columns:1fr 280px;gap:12px}
    .activity-list{margin:0;padding:0;list-style:none;color:var(--text)}
    .activity-list li{display:flex;gap:8px;align-items:flex-start}
    .activity-list a{color:#0969da;text-decoration:none}
    .activity-list .dot{width:10px;height:10px;border-radius:50%;background:#d0d7de;margin-top:6px}
    .spider-placeholder{height:160px;border:1px dashed #d0d7de;border-radius:6px;color:#57606a;display:flex;align-items:center;justify-content:center;text-align:center}
    @media (max-width:900px){.activity-overview .ao-body{grid-template-columns:1fr}}
    /* Contribution activity feed */
    .contrib-activity .month{margin:8px 0 12px 0;color:#57606a;font-size:12px}
    .feed{display:flex;flex-direction:column;gap:12px}
    .feed-item{display:flex;gap:12px}
    .feed-item .icon{width:24px;display:flex;align-items:flex-start;justify-content:center;color:#57606a}
    .feed-item .title{font-weight:600}
    .show-more{margin-top:12px}
    .show-more button{padding:6px 12px;border:1px solid #d0d7de;border-radius:6px;background:#fff;cursor:pointer}
  `]
})
export class AppComponent {
  title = 'github-profile-angular';
}
