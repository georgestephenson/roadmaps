# Model Context Protocol: Advanced Topics

This is following Anthropic's course, [Model Context Protocol: Advanced Topics](https://anthropic.skilljar.com/model-context-protocol-advanced-topics)

## Sampling

- MCP servers asks MCP client to run prompt in Claude on its behalf
- For example, summarise the Wikipedia results it has found
- Burden of prompting and resources required for that is shifted to the client. Good for publicly accessible MCP servers
- Server calls a "create message" function in MCP SDK
- Client then must have a "sampling callback" method defined, passed to the ClientSession call

## Log and progress notifications

- MCP server can provide progress updates and logs, which we can then use to update users.
- To write a log/info/update to the client, MCP servers calls against the context: `context.info("Writing report...")`
- To report progress, MCP server calls `context.report_progress(50,100)` for 50 out of 100 (50%)
- MCP client has a `logging_callback` passed to the session and a `progress_callback` passed to the `call_tool()` method call (as progress is specific to that tool call)

## Roots

- User might refer to a file without giving the full path
- MCP server can have a "list_roots" tool that lists all the root dirs the user has granted access to
- MCP server can then search through the root dirs for the file

## Transport and communication

- Lots of JSON message types for sending data between the MCP client and the server
- STDIO transport with stdin and stdout can only be used with MCP client and server running on same machine
- StreamableHTTP transport used for client and server over HTTP connection
- Stateless HTTP allows load-balancing of MCP clients/servers however tradeoff is client don't get session IDs, and other tradeoffs