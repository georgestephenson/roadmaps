# Understanding the Basics

## Writing a good CLAUDE.md

- Use `/init` to ask Claude to create one by analysing your codebase.
- No format required, but keep it short and human-readable. Probably advisable to use standard markdown syntax.
- For domain-specific knowledge/workflows, use **Claude skills**. The `CLAUDE.md` is loaded for every session so should be relevant for all or at least most requests.
- Use it to avoid Claude making mistakes. Don't use it to explain every single detail of the system.
- You emphasise points using e.g. IMPORTANT
- Link to additional files using @, e.g. `@./README.md`. Claude will not automatically  load those files into session but can reference them as required.

To include:
- Non-obvious bash commands, intructions for building, testing, etc.
- Etiqutte, code style, architectural decisions and directions
- Common quirks and gotchas

To exclude:
- Anything obvious from reading the code
- Obvious code practice like "write clean code"
- Language conventions, framework and library conventions, Claude should already know about these.
- Detailed documentation for e.g. APIs, link to it instead.
- Long detailed explanations, tutorials, descriptions

## `CLAUDE.md` Locations

- `~/.claude/CLAUDE.md` for all sessions in your repos
- `./CLAUDE.md` to commit to repo to share with team
- `./CLAUDE.local.md` for personal preference project-specific instructions/notes
- Parent dirs and child dirs can have `CLAUDE.md` files that are pulled in automatically depending on relevance.
