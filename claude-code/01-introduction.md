# Introduction to Claude Code

## Claude Code

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
