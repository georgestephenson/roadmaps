# Advanced Claude Code

Notes from section on advanced features

- Use `/loop` command to repeat a prompt at regular intervals
- Can also use Cloud or Desktop scheduled tasks
- `opusplan` model setting - use Opus model for planning, Sonnet for execution 
- `outputStyle` is a config setting to choose how Claude responds
    - Default is designed to help you do efficient software engineering
    - Proactive prefers immediate action over planning and pausing
    - Explanatory provides more educational insights
    - Learning will ask you to contribute some code yourself so you can learn-by-doing
- Code intelligence plugins - Claude Code has a built-in LSP tool giving Claude "IDE-level" awareness of code, ability to see type errors immediately after editing, jump to definitions, find references, etc. More easy navigation of code and deeper understanding of code.

## Running Claude in parallel

Different approaches to running Claude agents in parallel

- Subagents, have their own context but in the same session with same git branch
- `claude agents` manage background agent sessions, stay on even when you close the CLI, only stop when they need you input or they're completed
- Agent teams, experimental feature for multiple Claude Code sessions coordinated by a lead session
- Worktrees, separate git worktrees for code and file isolation between agents
- `/batch <instruction-here>` decomposes a large-scale instruction into smaller changes. It uses a built-in skill to make a plan with independent units, once approved, spawns background subagents for each unit. Each subagent implements, runs tests, and opens a PR. It requires a git repo in order to orchestrate this workflow.
    - Would be good for a repo-constrained mechanical migration or refactor.

### Worktrees

Use `claude --worktree <worktree-name-here>` to start Claude Code in a separate worktree

So you have isolation between agents, in Claude Code and in git too

- Claude Code auto-cleans up worktrees with no changes when you exit a session, prompts you otherwise
- You can also manage worktrees directly in git

### Agent teams

- Experimental mode: multiple Claude Code instances working together
- One session is the team lead
- Anthropic used this approach to build a C Compiler, although it cost $20,000 in API costs!