# CLI tools

So I think the reason this is in the roadmap is essentially to say the vite create command is the fastest way you to new up a new react project!

## Vite

- Roadmap.sh gives Vite as the only CLI tool to learn in relation to React, but they're intrinsically linked, they just complement each other
- Vite is a built tool that is used to make building and running a React site faster and easier
- Vite is French for "fast", pronounced veet
- Created by inventor of Vue
- `npm create vite@latest` lets you template projects with any framework, React being one of them - with Oxlint as a compiler, by the same company VoidZero, an ESLint-compatible linter written in Rust. Here ox menas oxidation means rust-ified, clever 

### How it works

- Starts server immediately, then uses route splitting to figure out which modules need to be loaded
- Native ESModule support in modern browsers
    - Browsers do bundling in developer
    - Rollup does bundling for production
- npm create vite@latest much faster to start and hot reload than the old create-react-app
- Many options to quickly deploy e.g. Cloudflare page, GitHub page, Netlify, Vercel