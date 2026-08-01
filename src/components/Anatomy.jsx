import CodeBlock from './CodeBlock.jsx'

const tree = `my-skill/
├── SKILL.md           # Main instructions (required)
├── reference.md       # Detailed API docs — loaded when needed
├── examples.md        # Usage examples — loaded when needed
└── scripts/
    └── validate.sh    # Script Claude executes — never loaded into context`

const locations = [
  ['Personal', '~/.claude/skills/<skill-name>/SKILL.md', 'All your projects'],
  ['Project', '.claude/skills/<skill-name>/SKILL.md', 'This project only'],
  ['Plugin', '<plugin>/skills/<skill-name>/SKILL.md', 'Wherever the plugin is enabled'],
  ['Enterprise', 'Managed settings', 'All users in your organization'],
]

export default function Anatomy() {
  return (
    <section id="anatomy" className="section section-alt">
      <h2>Anatomy of a skill</h2>
      <p className="section-lead">
        A skill is a directory with <code>SKILL.md</code> as its entrypoint. Everything
        else is optional: templates for Claude to fill in, example outputs, executable
        scripts, or detailed reference docs. Reference these files from your SKILL.md so
        Claude knows what they contain and when to load them.
      </p>

      <div className="anatomy-grid">
        <CodeBlock title="skill directory structure">{tree}</CodeBlock>
        <div>
          <h3>Where skills live</h3>
          <table className="table">
            <thead>
              <tr><th>Location</th><th>Path</th><th>Applies to</th></tr>
            </thead>
            <tbody>
              {locations.map(([loc, path, scope]) => (
                <tr key={loc}>
                  <td>{loc}</td>
                  <td><code>{path}</code></td>
                  <td>{scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="table-note">
            When skills share a name across levels, enterprise overrides personal, and
            personal overrides project. Plugin skills use a{' '}
            <code>plugin-name:skill-name</code> namespace so they never conflict.
          </p>
        </div>
      </div>

      <div className="callout">
        <strong>Keep SKILL.md under 500 lines.</strong> Move detailed reference material to
        separate files, and keep references one level deep from SKILL.md — deeply nested
        references cause Claude to preview files partially instead of reading them fully.
      </div>
    </section>
  )
}
