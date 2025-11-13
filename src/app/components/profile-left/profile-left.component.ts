import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';
import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-profile-left',
  templateUrl: './profile-left.component.html',
  styleUrls: ['./profile-left.component.scss'],
  imports: [CommonModule]
})
export class ProfileLeftComponent {
  username = signal(environment.githubUsername);
  user = signal<any>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private gh: GithubService) {
    this.load();
  }

  async load() {
    this.loading.set(true);
    this.error.set(null);
    try {
      const data = await this.gh.getUser(this.username());
      this.user.set(data);
    } catch (e: any) {
      this.error.set(e.message || 'Failed to load user');
    } finally {
      this.loading.set(false);
    }
  }
}
