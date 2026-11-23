# Security

The installed skill contains Markdown instructions, not a sandbox. An agent may still misunderstand a document, use unsafe tools, or disclose information if its host permits it. Review permissions and data handling before using confidential sources.

Repository validation scripts run only when a maintainer or CI invokes them. They use local files and Node.js built-ins, require no package installation, and do not make network calls. They are kept outside the installable skill folder.

## Reporting a problem

Use [GitHub's private vulnerability reporting](https://github.com/ihmorol/research-synthesis/security/advisories/new) for problems that could expose files, execute commands, or disclose sensitive information. If private reporting is unavailable, open an issue containing only a request for a private reporting channel. Do not include secrets, private papers, or exploit details there.

A minimal fictional document is usually enough to demonstrate prompt injection. Describe the agent host, relevant permissions, task, unsafe action observed, and what should have happened. Do not publish information that identifies participants or reproduces confidential source material.

Maintenance focuses on the latest published release. Updates to workflow instructions cannot control a host agent's tools or retroactively remove data sent to another service.
