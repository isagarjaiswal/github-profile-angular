import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly restBase = 'https://api.github.com';
  private readonly graphQlBase = 'https://api.github.com/graphql';
  private token = environment.githubToken || (typeof localStorage !== 'undefined' ? (localStorage.getItem('NG_APP_GH_TOKEN') || '') : '');

  async getUser(username: string) {
    const res = await fetch(`${this.restBase}/users/${username}`, {
      headers: this.authHeaders(),
    });
    if (!res.ok) throw new Error('GitHub user fetch failed: ' + res.status);
    return res.json();
  }

  async getContributions(username: string) {
    return this.getContributionsByYear(username, new Date().getFullYear());
  }

  async getContributionsByYear(username: string, year: number) {
    if (!this.hasToken()) return null;

    const from = `${year}-01-01T00:00:00Z`;
    const to = `${year}-12-31T23:59:59Z`;

    const query = `
    query($login:String!, $from: DateTime!, $to: DateTime!) {
      user(login:$login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }`;

    const resp = await fetch(this.graphQlBase, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.authHeaders(),
      },
      body: JSON.stringify({ query, variables: { login: username, from, to } }),
    });

    if (!resp.ok) {
      const txt = await resp.text();
      console.error('GraphQL error', resp.status, txt);
      throw new Error('GitHub GraphQL failed');
    }

    const json = await resp.json();
    return json.data?.user?.contributionsCollection?.contributionCalendar || null;
  }

  private authHeaders() {
    const h: Record<string, string> = {};
    if (this.hasToken()) h['Authorization'] = `bearer ${this.token}`;
    return h;
  }

  hasToken() {
    return !!this.token;
  }
}
