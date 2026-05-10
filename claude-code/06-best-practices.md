# Best Practices for Claude Code

- Provide ways for Claude to verify its work. Give prompts that lead to deterministic results (e.g. make sure the build succeeds, write tests, take a screenshot of the result)
- For complex tasks, utilise Plan Mode to create a detailed plan file in markdown before altering source code.
- Maintain `CLAUDE.md` as the project's central knowledge repository, containing relevant information.
- Carefully manage context window limits to avoid performance degradation, use `/compact`, new conversations, subagents and skills were relevant.
- Automate routine processes, like Git commits, and set up hooks.
- You can provide rich context with @ symbol for filepaths, pasting in images, giving URLs, piping in data, letting Claude fetch via bash commands or MCP servers
- Claude can interview you and/or ask questions in plan mode to make sure it understands your vision