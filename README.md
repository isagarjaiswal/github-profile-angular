# GitHub Profile Angular (Assignment)

**Purpose:** Angular (v17+) app replicating a GitHub profile page UI with:
- Left-panel profile via GitHub REST API
- Contribution heatmap via GitHub GraphQL (fallback to mock)
- Tabs: Repositories / Projects / Packages

## Features
- Fetch profile from `https://api.github.com/users/:username`
- Contribution heatmap using ECharts and GraphQL `contributionsCollection.contributionCalendar`
- Responsive two-column layout (collapses on small screens)
- Mock contributions when no token is provided

## Prerequisites
- Node.js v20.x
- npm v10+
- Angular CLI 17.x

## Setup
```bash
npm install
```

### Configure username and token
Edit `src/environments/environment.ts`:
```ts
export const environment = {
  production: false,
  githubUsername: 'shreeramk',
  githubToken: '' // paste a personal access token locally if you want real contributions
};
```
Token scopes: `read:user` (GraphQL needs auth). Do NOT commit tokens.

## Run
```bash
npm start
# then open http://localhost:4200
```

## Build
```bash
npm run build
# dist/github-profile-angular
```

## Tests (optional)
```bash
npm test
```

## Deployment
- Netlify/Vercel build command: `npm run build`
- Publish directory: `dist/github-profile-angular`
- For public demos, prefer mock contributions (do not expose PAT in client).

## Notes
- If GraphQL fails or no token, the heatmap uses mock data.
- ECharts container has fixed height to render the calendar.
