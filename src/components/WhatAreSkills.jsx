const cards = [
  {
    icon: '📦',
    title: 'Modular capabilities',
    body: 'Each skill packages instructions, metadata, and optional resources (scripts, templates, reference docs) that Claude uses automatically when relevant to your request.',
  },
  {
    icon: '🔁',
    title: 'Create once, use everywhere',
    body: 'Stop pasting the same checklist or procedure into chat. Skills load on demand, so you never repeat the same guidance across conversations.',
  },
  {
    icon: '🪶',
    title: 'Nearly free until used',
    body: "Unlike CLAUDE.md content, a skill's body loads only when it's used. Long reference material costs almost nothing until you actually need it.",
  },
  {
    icon: '🌐',
    title: 'An open standard',
    body: 'Claude Code skills follow the Agent Skills open standard (agentskills.io), which works across multiple AI tools — and across Claude Code, the Claude API, and claude.ai.',
  },
]

export default function WhatAreSkills() {
  return (
    <section id="what" className="section">
      <h2>What are Agent Skills?</h2>
      <p className="section-lead">
        Skills are reusable, filesystem-based resources that give Claude domain-specific
        expertise — workflows, context, and best practices that turn a general-purpose
        agent into a specialist. Create a skill when you keep pasting the same
        instructions into chat, or when a section of your CLAUDE.md has grown into a
        procedure rather than a fact.
      </p>
      <div className="card-grid">
        {cards.map((c) => (
          <article key={c.title} className="card">
            <div className="card-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </article>
        ))}
      </div>
      <div className="callout">
        <strong>Skills vs. everything else:</strong> a <em>slash command</em> is now just a
        skill (custom commands were merged into skills). A <em>subagent</em> is a separate
        context that executes work. An <em>MCP server</em> connects external tools. A skill
        is simpler than all of these — it's instructions Claude loads when they're relevant.
      </div>
    </section>
  )
}
