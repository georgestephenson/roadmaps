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
