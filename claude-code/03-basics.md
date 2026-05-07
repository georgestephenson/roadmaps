# Understanding the Basics

## Models

### Haiku 4.5

- Released Oct 2025 as smallest Claude model.
- Better coding performance than Clause Sonnet 4 according to [Anthropic's benchmarks](https://www.anthropic.com/news/claude-haiku-4-5), but one-third the cost and twice the speed.
- Can accomplish more within your account usage limits.
- Good for low latency use cases.
- Displays "low rates of concerning behaviors". AI Safety Level 2 (ASL-2) compared to ASL-3 for more sophisticated models.
- "Pricing for Haiku 4.5 on the Claude Platform starts at $1 per million input tokens and $5 per million output tokens"

### Sonnet 4.6

- Released Feb 2026 after Sonnet 4.5 (Sep 2025).
- Described as "workhorse" and "frontier" model, ideal balance of advanced reasoning and speed.
- "Pricing for Sonnet 4.6 starts at $3 per million input tokens and $15 per million output tokens"
- Users preferred Sonnet 4.6 over Opus 4.5 59% of the time, so it has got close to the previous Opus model's level of performance.

### Opus 4.7

- Released Apr 2026
- Premium models for tasks no other model can handle
- Generally has the best benchmark results of Claude models
- "Pricing for Opus 4.7 starts at $5 per million input tokens and $25 per million output tokens"
- Higher resolution image support for reading images, 2576px / 3.75MP (increased from previous limit of 1568px / 1.15MP)

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

## Skills

Add a file to `.claude/skills/<skill-name>/SKILL.md` and Claude automatically uses it when relevant. Or invoke directly using `/skill-name` command.

- If you keep copy-pasting the same template into the prompt Claude repeatedly, to do a specific type of task/procedure, this should likely be a `SKILL.md`.
- Custom commands have been merged with Skills in Claude - skills can be invoked like custom commands but are also used by Claude automatically and some more optional features.
- Claude skills follow [Agent Skills](https://github.com/agentskills/agentskills) open standard format which is also maintained by Anthropic.
- Can add to subdirectories like `packages/frontend/.claude/skills/` and Claude will consider using them when editing files in those subdirectories.
- Reference content vs. task content - you can give Claude general prompting for certain tasks, or specific step-by-step instructions. The latter is more likely to be invoked directly, e.g. `/deploy`. You can disable automatic invocation by adding `disable-model-invocation: true` to the `SKILL.md`.
- Provide arguments to the skill using `$ARGUMENTS` in the `SKILL.md` e.g. /fix-issue 123 with a `SKILL.md` that includes "Fix GitHub issue $ARGUMENTS".
- Claude Code will append `ARGUMENTS: <input>` to the prompt if you use a skill with no `$ARGUMENTS` specified.
- `!` with a command in backticks will inject the output of that command into the skill before the content is sent to Claude
- `context: fork` in the frontmatter will run a skill in isolation so that it becomes a subagent. It won't have access to the session and conversation history up till now. E.g. research something specific, passed through `$ARGUMENTS`.
- Skills should have composability in mind, Claude can invoke multiple skills simultaneously so they should work well together.
- Consider quantitative and qualitative metrics for success criteria that the skill is working. Look for correctness and consistency of results, and lack of user intervention required.

### Skill directory

Housing skills in a directory allows supporting files such as template output, examples of how the template should be filled in, and scripts that can be run to assist the skill.

```
my-skill/
├── SKILL.md           # Main instructions (required)
├── reference.md       # Detailed API docs (loaded when needed)
├── template.md        # Template output for Claude to fill in
├── examples/
│   └── sample.md      # Example output showing expected format (loaded when needed)
└── scripts/
    └── validate.sh    # Script Claude can execute (executed, not loaded)
    └── helper.py      # Another example
```

Reference the supporting files in `SKILL.md`. All other files are optional.

### YAML Frontmatter

Configure skills using YAML frontmatter at the start of the markdown (frontmatter is just metadata at the start of a markdown file written in YAML)

```
---
name: my-skill
description: What this skill does
disable-model-invocation: true
allowed-tools: Read Grep
---

Your skill instructions here...
```

Description is a recommended metadata field as it tells Claude when to use the skill. Structure: `[What it does] + [When to use it] + [Key capabilities]`

### Skills and MCP servers

- Skills can be thought of as the knowledge layer on top of a built MCP server, with workflows and best practices to get the most out of the MCP server.
- MCP is the what, and Skills are the how.
- Skills allow the best practices to be embedded in every interaction with the MCP server.

### Use Cases

Identify concrete use cases for your skill before producing the files such as `SKILL.md`. Common use cases categories:

1. Creating high-quality documents or assets as output, consistently, following specific rules, templates, generated by specific commands or workflows.
2. Workflow automation, with step-by-steps tasks, validation gates, and templates guiding inputs and outputs. For example coordinating use of one or more MCP servers to complete a procedure
3. Enhance MCP use with embedded domain expertise, context, etc. Coordinate MCP calls in sequence.

## Context Window

- Holds all context - conversation history, CLAUDE.md, loaded skills, and more.
- Has a limited size in number of tokens, so compacts automatically, or based on instructions in CLAUDE.md, or manually by running `/compact` with optional focus parameter
- Compaction doesn't count towards usage limit (although presumably also uses Claude to summarise history in natural language)
- Claude only loads a full skill into context when it decides to use it, so it's a way of managing the context.
- Subagents exist outside the context with their own separate context, so it's another way to manage context scope and limits.
- The command `/context` gives a visual overview of how many tokens each components occupies (conversation history, CLAUDE.md, etc).
- Opus 4.7 supports a 1M size context window, Sonnet 4.6 also does if "extra usage" is enabled. By default Claude context windows is 200k, apparently

## Permissions

- View and manage permissions using `/permissions`
- Sourced from `settings.json`
- Permission tiers are Read-only, Bash commands, and File modification, in order of power/risk.
- Rules are Allow, Ask and Deny.
- By default, asks for permission before editing files or executing commands.
- Control whether to ask first or not, and set within a session or permanently
- Accept-Edits mode: editing allowed but ask for permission before executing commands
- Plan Mode: restrict Claude Code to read-only analysis. Can control whether a permission applies for plan mode analysis only, or can be used for command execution and file editing
- Delegate mode - lead agent restricted to delegating subagents
- Bypass-Permissions Mode, all actions allowed (yolo mode)

## Tools

- Tools allow Claude Code to perform different local actions on the computer
- Running bash commands
- Read and edit for file manipulations
- Glob and grep for searching
- WebSearch for searching web
- Full list of tools available from the tools reference [here](https://code.claude.com/docs/en/tools-reference).
- Claude Code has features for [advanced tool use](https://www.anthropic.com/engineering/advanced-tool-use), essentially this save context window space by searching tools on demand, invoking them and finding usage examples without consuming the context window.

## MCP

- Following Anthropic's course [Introduction to Model Context Protocol](https://anthropic.skilljar.com/introduction-to-model-context-protocol)
- Can use Python MCP SDK to very quickly build an MCP server from methods
- Distinction between MCP Server providing resources and MCP Client that manages connection and session to the MCP Server and cleans up afterwards. MCP client exposes the MCP server resources to the rest of the codebase. - Implementing `list_tools` and `call_tool` in MCP client is enough to start making use of the tools.

### Tools

- Actions that the LLM can execute
- Model-controlled

### Resources

- Resources expose data from the MCP server to the client
- So the resource can be accessed by the user or client application typically before the LLM model even runs, to inject additional context into the conversation.
- Different to tasks where the expectation is the LLM model will call them itself.
- App-controlled

### Prompts

- Custom-tailored prompts that will make best use of the MCP server, available to the client
- User-controlled, user decides when to use

## Plugins

- Plugins are modules that extend Claude Code with a collection or skills, agents, hooks and MCP servers.
- There can be many marketplaces for Claude plugins. The official one is `claude-plugins-official` and automatically available when Claude Code is installed.
- When trying, I could only install plugins using `/plugin` command from the CLI. But can also install plugins within VS Code extension using the extension's UI.

## Hooks

Run shell commands on certain events before/after Claude takes actions

Examples given
- A system notification hook when Claude needs input. Add `Notification` type hook to `~/.claude/settings.json`
- Call Prettier to auto-format code after edits (PostToolUse)
- Re-inject prompt after compaction: SessionStart type hook with `"matcher": "compact"`

Matchers filter events based on conditions so the hook only runs some of the time conditionally, not every time that event happens

The `if` field filters hooks by specific tool calls

PreToolUse and PostToolUse hooks can be used to run commands every time Claude runs a tool.

PreToolUse 
 - Good for preventing things from happening and sending Claude back an error message, e.g. prevent secrets being read and uploaded to Claude.
 - Can also use for, if editing a specific section of code, to open a new instance of Claude that will check if the new code to be written is a duplicate of existing code and feed back

PostToolUse 
- Good for checking for build errors after making any change. E.g. after editing TypeScript, check for any type errors.

There are other types of hooks beyond PreToolUse and PostToolUse.

Claude Code SDK can be used to programatically call Claude Code in hooks, scripts or helper commands. You can call by CLI or use TypeScript/Python/etc SDKs.

### Prompt Hooks

You can build a hook that sends a prompt to Claude, rather than using a deterministic command, to return the output from the LLM

### Agent Hooks

Like prompt-based hooks, however instead of only one LLM call, it spawns a Claude subagent to do tasks

### HTTP Hooks

POST to a HTTP endpoint instead of running shell command