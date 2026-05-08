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

## Commands

| Name | Description |
| ---- | ----------- |
| `claude` | Launch Claude CLI for current directory, indexing local files |
| `claude -r` | Same as `claude --resume`, passing a previous conversion session ID as input, to jump back into that conversation, or without any parameters to launch an interactive search of previous conversations |