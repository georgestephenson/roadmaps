# Introduction to Claude Code

## Vibe Coding

Using AI agents to perform AI-assisted coding without necessarily looking at the code itself.

Architecture - Test Driven Development and the more novel Spec Driven Development are two ways to architect the way you vibe code.

Implementation - Model Context Protocol (MCP) and Git enhance implementation efforts

Review - Linting and security scans are important. You can even use another AI agent to review your code written by a different agent.

These are all guardrails that are useful for manual coding and equally or even more important for AI coding.

## Coding Agents

AI workflows - simpler than agents, predefined task workflows. Can use RAG to find out information the LLM doesn't know itself.

AI agents - ability to reason and decide how to act for themselves.

ReAct Framework = Reason + Act

... and do this iteratively.

## Agentic Loop

Thought-Action-Observation cycle - this is a continuous loop, the agentic loop.
- Thought: LLM decides on next step
- Action: Agent takes action by calling tools
- Observation: Agent reflects on tool response

This loop can repeated until the objective of the agent has been achieved.

According to its official docs, Claude Code follows this same agentic loop: gather context, take action, verify results. Models do the reasoning, tools do the action.

Claude Code is the "agentic harness" around the Claude LLM model.
- Models: Claude Sonnet good for most coding tasks, Clause Opus more powerful for architectural decision making.
- Tools: file operations, searching codebases, executing commands e.g. shell commands, searching web, see code lint errors etc.
- Also tools for subagents, and more, such as orchestration, advanced tasks.
- Connect to external services with MCP

RAG - relevant data from vector database, adding context to your prompt to enhance input to the LLM

Agentic RAG - rather than a hardcoded lookup in a workflow, the agent can choose when and where RAG is most relevant, and which database to use RAG on.

## Course - Claude Code in Action

### Intro

Link to the official course by Anthropic: [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action)

In order to give LLMs agency to use tool, the coding assistant (Claude Code) appends a lot of text to the prompt, telling the LLM how to e.g. read files with our file reading tool.

"Strong tool use is everything" - more complex tools allow Claude Code to complete more complex tasks. By being extensible for advancements in tools, it makes the platform more futureproof.

Example - ask Claude to do data analysis on a CSV file and product a Jupyter notebook with all it's findings - creating visuals, finding key data insights, etc. Can hone in on each cell in to notebook to enhance details. Really impressive.

Playwright MCP Server - gamechanger stuff. Allow Claude to control the browser. Claude can update the UI styling of the app based on Claude taking screenshots of the browser to iterate on its own changes.

GitHub MCP - able to review GitHub pull requests for things like security issues.

### Sample Project

Running a sample project.

Generally recommended to run `/init` in Claude when using it with a new project, to generate a `CLAUDE.md`, a summary of the codebase, committed/shared in codebase.

`CLAUDE.local.md` - personal local instruction and customisations, not shared with other engineers
`~/.claude/CLAUDE.md` - used globally on your machine only

`CLAUDE.md` is one of the options for adding to Claude's "memory", an important concept for optimising context.

Custom commands - you can add these under `.claude/commands` in the project. Just add an .md file prompting what you want Claude to do. You can also add arguments with the $ARGUMENTS token.

Claude GitHub integration - 1st integration is ability to mention Claude with @claude, from an issue or PR, Claude will run and response to the issue/PR. 2nd integration is on Pull Request, Claude Code will review your changes and post a full report.

You can customise this GitHub actions to e.g. enable use of the Playwright MCP server tools, with custom instructions on how to run the system within the browser, and use these tools.

Can raise an issue, mentioning @claude, and get Claude to automatically look and fix the issue.