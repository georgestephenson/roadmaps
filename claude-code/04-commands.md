# Command Cheatsheet

## Shortcuts

| Name | Description |
| ---- | ----------- |
| Ctrl+C | Cancel current input, terminate Claude Code |
| Ctrl+R | Reverse search of previously entered prompts |
| Esc | Exit menu, cancel input, clear cmd line, etc. |
| Esc+Esc | Rewind to previous prompt in conversation history |
| Shift+Tab | "Shift" permission modes - default ask permission, or allow edits, or plan mode only |
| Slash Commands (/) | Call different commands with /, assisted by autocomplete |
| Bash Mode ! | When you prefix with ! you can run bash commands directly within Claude Code CLI without exiting, most crucially, the command typed and the output are added to the conversation context. |
| \ | Multiline input in the prompt, same as most terminals, bash etc. |
| @ | Point Claude at specific file or folder, to prioritise reading that content into the conversation context |

## `claude` flags and params

| Name | Description |
| ---- | ----------- |
| `claude` | Launch Claude Code CLI for current directory, indexing local files |
| `claude -r` | Same as `claude --resume`, passing a previous conversion session ID as input, to jump back into that conversation, or without any parameters to launch an interactive search of previous conversations |
| `claude "query"` | Launch Claude Code CLI with an initial prompt |
| `claude -p` | Same as `claude --print`, to start the agent based on one prompt input, allowing it to run agentically, then return with a single output |
| `claude -c` | Reopens Claude with previous most recent conversation |
| `claude --add-dir` | By default Claude opens with the current directory as the working session. Can specify to add directories to the working session, permitting reading and writing files in those directories |

## Session Commands

| Name | Description |
| ---- | ----------- |
| `/help` | Interactive help menu (most common shortcuts/commands listed, linking to a more comprehensive overview) |
| `/usage` | On subscription plans, use this command to check your current usage and limits. This seems to now be merged with `/cost` command |
| `/clear` | Clears conversation context, useful for preventing "context drift" where model may be confused by irrelevant history |
| `/exit` | Exit CLI, clean shutdown saving conversation history |
| `/export` | Export conversation history to the clipboard or to a file, in markdown format |
| `/status` | Current status of session and Claude CLI including cwd (current working directory) and active MCP servers |
| `/statusline` | Takes as parameter a prompt describing what you want a persistent status line below the prompt entry to look like in the CLI |
| `/resume` | Select a previous session to resume |
| `/rewind` | Rewind back to previous prompt in the current session |
| `/plan` | Enable plan mode (same as Shift+Tab) |
| `/doctor` | Diagnose and troubleshoot issues with Claude. For example, displays current version, and any issues with plugins |

## Context & Memory Commands

| Name | Description |
| ---- | ----------- |
| `/init` | Use Clause to help write itself a `CLAUDE.md` file summarising the current project, and key build/test/run commands for the project |
| `/context` | Detailed breakdown of current usage of the context window in terms of tokens: system prompt, tools, agents, skills, etc. |
| `/compact` | Ask Claude to summarise the conversation history and replace it with the summary, acting as compaction of the context, in order to save tokens in the context window. You can also add a prompt emphasising which aspects of the history to summarise |
| `/memory` | Opens menu to edit the various Claude memory files: project `CLAUDE.md`, user-specific `CLAUDE.md`, auto-memory folder maintained by Claude itself, agent memory |

## Configuration Commands

| Name | Description |
| ---- | ----------- |
| `/config` | Opens config section of settings menu |
| `/permissions` | Opens menu for controlling allow/ask/deny permissions on tool use for each tool, and also can add directories to the current workspace (defaults to cwd) |
| `/model` | Switch models between Haiku, Sonnet, Open, etc, and switch effort level from the default |
| `/agents` | Menu for agents running, in library, and option to create new agent. Can invoke subagents |
| `/hooks` | Read-only menu displaying currently active hooks matching the various preset events. Edit settings.json or ask Claude to add or modify the hooks on these events |
| `/mcp` | Used to manage existing MCP servers - authenticate, reconnect, disable etc. Add new MCP servers using `claude mcp add` |