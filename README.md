# Social App - Social Network (Angular)

A modern **Arabic-friendly** web client for a social network: sign in, browse the feed, post and interact, manage your profile, and get notifications. Uses **Cairo** font and RTL-aware layout in places.

## Features

- **Authentication**: Sign up, sign in, change password, guest/auth route guards, logout
- **Feed**: Home feed, create posts, filters (e.g. following / bookmarks), likes, comments, share
- **Suggestions**: Discover suggested users to follow
- **Post details**: Full post view with comments and interactions
- **Comments & replies**: Nested threads, likes, edit/delete where allowed
- **Profile**: Your profile or another user profile, posts, filters, profile/cover images
- **Bookmarks**: Save posts and open from feed filters
- **Notifications**: List, unread badge, mark all read
- **UI/UX**: Tailwind, Angular Material, Font Awesome, Toastr, relative time (ngx-timeago)
- **Responsive**: Desktop and mobile layouts
- **API**: Connects to the Route backend (see `src/environments/environment.ts`)

> **Note:** This repo is the **Angular frontend** only. Data comes from the configured API base URL.

## Technologies Used

- **Angular 21** (standalone components, lazy-loaded routes)
- **TypeScript 5.9**
- **HTML5** / **CSS3** (Tailwind 4, custom theme)
- **Tailwind CSS 4**
- **Angular Material** & **CDK**
- **Font Awesome**
- **RxJS**
- **ngx-toastr**, **ngx-timeago**, **ngx-cookie-service**, **@ctrl/ngx-emoji-mart**
- **@fontsource/cairo**
- **Angular Router**, **HttpClient** (with interceptors)

## Project Structure

```
SocialApp/
|-- angular.json
|-- package.json
|-- package-lock.json
|-- README.md
|-- tailwind.config.ts
|-- tsconfig.json
|-- tsconfig.app.json
|-- public/                 # static assets
|-- src/
|   |-- index.html
|   |-- main.ts
|   |-- styles.css          # global styles + Tailwind
|   |-- custom-theme.scss   # Angular Material theme
|   |-- environments/
|   |   `-- environment.ts  # API base URL
|   `-- app/
|       |-- app.ts
|       |-- app.config.ts
|       |-- app.routes.ts
|       |-- core/           # services, models, guards, interceptors
|       |-- shell/          # app shells (auth + main layout + navbar)
|       |-- features/       # auth, feed, profile, notifications, post-details, not-found
|       `-- shared/         # shared components, types, formatters
```

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (comes with Node)

### Run locally

1. Open a terminal in the project folder.

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm start
```

or:

```bash
ng serve
```

4. Open **http://localhost:4200**

The app uses **hash routing** (URLs look like `#/feed`).

### Build for production

```bash
npm run build
```

Output is under **`dist/`** (project name in `angular.json`: `socialApp`). With the application builder you typically deploy:

- `dist/socialApp/browser/`

## Usage (after login)

- **Feed**: Browse posts, create content, use filters, interact (like, bookmark, comment, share as available).
- **Suggestions**: Open the suggestions route to find users.
- **Profile**: Own profile or another user via `profile/:id`.
- **Notifications**: From the navbar; unread count in the UI.
- **Settings**: Change password from the route wired in `app.routes.ts`.

## APIs & Integrations

- Base API URL is set in **`src/environments/environment.ts`** (`baseUrl`).
- HTTP calls use **HttpClient** with **interceptors** (e.g. auth token, loading).
- No API keys should live in the frontend for real backends; use your own server and env-specific config.

## Security Note

- Do not commit secrets or production tokens in the repo.
- Use HTTPS in production; handle tokens (cookies/storage) according to your security policy.

## Testing

```bash
npm test
```

You can also use browser **DevTools** (Console / Network) while navigating.

## Deployment

- Build: `npm run build`
- Deploy the contents of **`dist/socialApp/browser/`** (or the path shown after your build) to any static host:

  - **GitHub Pages** (devDependency `angular-cli-ghpages` is available; configure `base-href` if needed)
  - **Netlify**, **Vercel**, or any static file server

## Known Notes

- `package.json` name: `social-app`; Angular project name: `socialApp`.
- You may see a CSS warning about `@import` order in `styles.css` (e.g. Google Fonts vs Tailwind); can be cleaned up by reordering imports.
- **Hash routing** avoids extra server rewrite rules on static hosting.

---

## Author

<div align="center">

### **Eng. Yasien Ahmed Elkelany**

**Backend .NET Developer** | **Angular Frontend Developer**  
**General Authority for Investment**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yasien-ahmed-b8ab41325)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yasienahmed607@gmail.com)

[LinkedIn Profile](https://www.linkedin.com/in/yasien-ahmed-b8ab41325) | [Email](mailto:yasienahmed607@gmail.com)

</div>

---

<div align="center">

**Made with care by Eng. Yasien Ahmed Elkelany**

Star this repo if you find it helpful.

</div>
