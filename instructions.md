# Static-Site + Tailwind CSS Starter Prompt for Cline

Copy everything between the `---` fences and paste it into Cline (or any AI assistant).
It will scaffold a zero-config, Tailwind-powered static-site workspace for you.

---

Create a modern, fast static-site development environment with the following requirements:

1. Project root folder: `static-tailwind-site`
2. Tooling
   - Vite (dev server + lightning-fast HMR)
   - Tailwind CSS v3 (utility-first, JIT mode, no custom config unless I ask)
   - PostCSS (Autoprefixer built-in)
   - Prettier + basic Tailwind class-sorting plugin
   - Optional: tiny `npm-run-all` script so `npm run dev` opens browser automatically
3. Folder layout
static-tailwind-site/
├── public/           # favicon, robots.txt, images, etc. (copied as-is)
├── src/
│   ├── index.html
│   ├── css/
│   │   └── style.css   # only the three Tailwind directives
│   └── js/
│       └── main.js     # empty for now (Vite entry)
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── .gitignore
4. Scripts in package.json
- `npm run dev`     – start Vite on localhost:5173 with hot reload
- `npm run build`   – output to `/dist`, ready for static hosting
- `npm run preview` – locally preview the production build
5. Tailwind setup
- JIT mode enabled
- Content glob: `src/**/*.{html,js}`
- No custom colors, fonts, or plugins yet (I'll add later)
6. Sample files
- `src/index.html` – minimal HTML5 boilerplate, mobile viewport, links to `/src/css/style.css` and `/src/js/main.js`
- `src/css/style.css` – only:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- `src/js/main.js` – empty ES-module file (Vite needs an entry)
- `public/favicon.ico` – place a generic one (or emoji SVG)
7. Git ignore
- node_modules, dist, .env, .DS_Store, *.log
8. Optional quality-of-life
- Add a `.vscode/extensions.json` recommending "Tailwind CSS IntelliSense" and "Prettier"
- Add a `.nvmrc` file with Node 20 (lts)
9. Final check
- After scaffolding, run `npm install && npm run dev` and confirm:
  – localhost:5173 loads with no errors
  – editing `src/index.html` and adding class="text-3xl font-bold text-cyan-600" instantly hot-reloads and shows Tailwind styles
- Provide a one-line deploy command for Netlify:
  `netlify deploy --prod --dir=dist`
- Provide a one-line deploy command for Vercel:
  `vercel --prod`

Output only the files and commands—no extra explanations.
