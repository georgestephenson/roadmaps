# Security

- Claude security is mostly around requiring approval for commands
- Better to use sandboxing to allow safe auto-approval rather than approving Claude's commands without really paying attention. More autonomous
- Use `/sandbox` to give Claude a sandbox where you can enable safe auto-approval constrained to Claude's permissions. Or use VPNs etc.
- Be aware of risks like prompt injection. Claude security really around on permissions on input to Claude (make sure you're in control of the prompts, make sure your API keys are secret, etc) and then permissions on Claude's execution (ask approval first)

## Claude Code Security

- New capability built into Claude Code on web
- Enterprise features, contact sales for access. However they expedited free access for maintainers of open-source repos
- Essentially using Claude to scan for vulnerabilities and suggest fixes
- On reviewing fix, Claude can create a PR to fix for human approval. All on web UI