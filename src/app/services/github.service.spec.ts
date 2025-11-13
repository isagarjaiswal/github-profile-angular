import { TestBed } from '@angular/core/testing';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubService);
  });

  it('returns null contributions when no token is set', async () => {
    const res = await service.getContributions('octocat');
    expect(res).toBeNull();
  });
});
