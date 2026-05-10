# Claude Workflow

At its most basic, Claude works using the agentic loop: gather context (index codebase, read `CLAUDE.md`, read relevant skills, other context), take action (write a plan and/or execute changes), and verify results (tests, linting).

MCP servers can be used to coordinate any of these steps with external resources.

## Permission Modes

- default, ask permission before tool use
- acceptEdits, allow file edits but ask permission for commands
- plan, read files and allow read-only shell commands, designed for detailed planning documentation, no edits allowed
- auto, research preview mode that auto-approves tool use with automated safety checks
- dontAsk, auto-deny tool use unless pre-approved - so this mode could run without user intervention with agreed permission scope
- bypassPermissions, skip all permission prompts, everything goes except deleting root and home directories. Only use in isolated environments like VMs

As noted previously, Shift+Tab cycles through the permission modes: default, acceptEdits, and plan.

## Plan Mode

For complex problems, letting Claude jump straight into start coding can end up solving the wrong problem. The problem is that our prompt is often ambigious enough that it can be interpreted in several different ways. Moreover, even if Claude understands the problem well enough, there are many possible solutions, all of which depend on architectural constraints, levels of effort and abstraction, with different results in terms of speed and performance under different loads. Claude's understanding of the existing code will depend on how must relevant information it has loaded into the context window.

Entering plan mode will get Claude to write a detailed implementation plan in a markdown file. You can then review the plan, work with Claude to feedback on the plan and make amendments, and once satisfied, you can exit plan mode and ask Claude to implement the plan.

The downside of plan mode is adding overhead on tokens expense. For small fixes, ask Claude to do it directly.

## Manage Sessions

- History of each session is stored in `~/.claude/projects/`.
- Sessions can be rewinded, resumed, and forked
- Use `claude --continue` or `-c` to resume previous session, or `claude --resume` or `-r` for a menu of previous sessions to resume (or pass ID as parameter). Can also use `/resume` in same way to switch between sessions when you're already in Claude Code CLI.
- Run `context` to see what is taking up context window space
- Use skills and subagents to make best use of context window space
- Use `/rewind` or Esc+Esc to go back in time within the current session.