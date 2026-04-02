# Ways to use Claude

1. Terminal
2. VS Code extension. Quite similar experience to GitHub experience.
3. There's a desktop app - but since I'm in Ubuntu Linux, there's no native version available.
4. Claude Code on the web. Still in research preview, but the possibilities here are impressive, can connect to GitHub repositories from your phone.
5. Channels - push messages, alerts and webhooks into your Claude Code session remotely from an MCP server.

    Could hook into events - such as CI alerts and error monitoring. Then get Claude to fix automatically. "Always-on" agents. Allows warm sessions - continuations of a thread so Claude has context of previous alerts / errors and can respond intelligently to the thread of repeated errors rather than an isolated instance with a cold session.

    Quite OpenClaw-esque. Can control using a Discord bot (BotFather). Use Telegram to talk to the Discord bot.

6. Community tools can extend Claude by integrating Claude with MCP servers providing external servers. For example GitHub or Jira integrations. There are third-party tools for example Conductor, a tool to run many Claudes. Third-party extensions for Claude can be installed with `/plugin` command.