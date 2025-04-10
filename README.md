# Simple Template PWA

Simple template for creating PWAs that can be installed offline, locally on the
device. Zero Android/iOS dev knowledge necessary.

### Checklist

- [ ] Understood the basics of HTML
  - If not, refer to https://developer.mozilla.org/en-US/docs/Web/HTML.
- [ ] Understood the basics of CSS
  - If not, refer to https://developer.mozilla.org/en-US/docs/Web/CSS.
- [ ] Understood the basics of JavaScript
  - If not, refer to https://javascript.info part 1; chapters 1 and 2.
- Installed Node.js
  - [ ] https://nodejs.org/en or...
  - You may prefer to install it via `pnpm` to save on disk space when installing
    additional dependencies.
    - [ ] [`pnpm`](https://pnpm.io/installation)
    - [ ] [Node.js](https://pnpm.io/cli/env#use)
- [ ] Installed project dependencies (`pnpm i` or `npm i`)
- [ ] Understood using Svelte
  - If not, refer to https://svelte.dev/tutorial/svelte/welcome-to-svelte
  - We use Svelte because despite what some people may say, it is not trivial
    to maintain a web application developed only with HTML + CSS + JS unless
    the app itself is trivial to begin with. Frameworks like Svelte simplifies
    the way data is managed in your app, enables code reuse (and microtasking)
    via componentization, automatically binds your data and UI, etc.
- [ ] Installed the required IDE or editor extensions
  - [ ] For VS Code (different from Visual Studio)
    - [ ] [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
    - [ ] [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ ] Modified the `.github/workflows/deploy.yml` as instructed if needed.
- [ ] Have a GitHub account
  - You could deploy it to other platforms but GitHub Pages should keep things simple.
- [ ] Installed Git.
- [ ] Understood Git.
  - If not, refer to [git - the simple guide - no deep shit!](https://rogerdudler.github.io/git-guide/)
- [ ] Installed the GitHub CLI.
  - `winget install --id GitHub.cli` in terminal.
- [ ] Logged in the GitHub CLI.
- [ ] Ran `gh repo create`?
  - The link after the message `Added remote` is your repository.
- [ ] Enabled GitHub Pages in your repository?
  - [ ] `https://github.com/<username>/<your-repository>/settings/pages`
- [ ] At the root of your project, ran `git init -b main`?
- [ ] At the root of your project, ran `git add . && git commit -m '<commit message>'`?
  - The `.` means all files in the project.
- [ ] Ran `git push origin main`?
  - This pushes the updated code from your computer to the repository.
- You'll find your web app at `https://<username>.github.io/<your-repository>/`. It
  will be updated as you push changes to the repository.

### Instructions for Installing PWAs

- [Chrome](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DDesktop)
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/ux)
- [Vivaldi](https://help.vivaldi.com/desktop/miscellaneous/progressive-web-apps/)

### Additional Things to Know

Note that to persist data in your app — that is, to save data — there exists
multiple options such as [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API). If you use IndexedDB I suggest using the 3rd party library [Dexie](https://dexie.org)

If you'd like to, you may want to use [GitHub Copilot](https://github.com/features/copilot)
but is otherwise not necessary. Bear in mind this is not a substitute for
learning web development and that vibe coding is a DISCOURAGED practice for any
software. My suggestions would be for implementing the Socratic method and/or
rubber duck debugging.
