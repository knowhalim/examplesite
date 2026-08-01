const resources = [
  ['Claude Code skills docs', 'https://code.claude.com/docs/en/skills'],
  ['Agent Skills overview', 'https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview'],
  ['Authoring best practices', 'https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices'],
  ['Agent Skills open standard', 'https://agentskills.io'],
  ['Anthropic skills repository', 'https://github.com/anthropics/skills'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-title">⚡ Agent Skills, Made Easy</p>
          <p className="footer-note">
            An educational guide built with React. Content sourced from the official
            Anthropic documentation.
          </p>
        </div>
        <div>
          <p className="footer-heading">Official resources</p>
          <ul>
            {resources.map(([label, href]) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noreferrer">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
