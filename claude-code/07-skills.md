# Skills

Following the [Agent Skills with Anthropic](https://learn.deeplearning.ai/courses/agent-skills-with-anthropic) course.

- Skills are folders with a SKILL.md file and other optional files.
- SKILL.md has frontmatter in YAML format
    name: name of the skill
    description: brief description which will always be visible to in Claude's context windows to decide whether to use the skill
- Other conditional rules (used sometimes not always) can be separate markdown files in the skill folder
- Other files could also be scripts that can be executed, e.g. python scripts, or assets
- As well as Claude Code, can upload skills to web Claude
- Skills are an open standard supported by Codex, Gemini CLI, etc.
- Skills are composable - combine them into powerful workflows
- Progressive disclosure - skills metadata always loaded into context window, instructions loaded when the skill is triggered, resources loaded as needed. Consider the context window as the "public good", and used sparingly
- While MCP servers can connect to external systems to retrieve data, skills teach the agent what to do with that data

## Pre-built skills

Creating Excel spreadsheets is a skill built into Claude. Other built-in skills include Powerpoint, Word, and PDF. 

There's also a skill-building skill, and others.

The two main types of pre-built skills are:

- Document skills, always included within Claude. The skill-creator skill is also turned on by default.
- Examples toggled off by default

NB: Claude Code does not come with these skills pre-installed

Skill-creator skill can also be used to modify skills for new requirements. It can also evaluate skills against best practices.

- Can attach branding images and other assets to a prompt and ask Claude to create a branding skill to brand documents etc appropriately
- Can combine a branding style with the native powerpoint skill, to coordinate a workflow creating a branded presentation

## Optional Directories

- /scripts
- /references
- /assets

## Claude Code Skills

- Examples given of different skills for: adding CLI commands, generating CLI tests, reviewing CLI commands