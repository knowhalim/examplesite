const levels = [
  {
    level: 'Level 1',
    name: 'Metadata',
    when: 'Always loaded at startup',
    cost: '~100 tokens per skill',
    body: "The name and description from the YAML frontmatter are loaded into the system prompt. Claude matches your request against the description to decide when to trigger the skill. Install many skills without context penalty.",
  },
  {
    level: 'Level 2',
    name: 'Instructions',
    when: 'Loaded when triggered',
    cost: 'Under 5k tokens',
    body: 'The body of SKILL.md — workflows, best practices, and guidance — enters the context window only when your request matches the description or you invoke the skill directly.',
  },
  {
    level: 'Level 3+',
    name: 'Resources & code',
    when: 'Loaded as needed',
    cost: 'Zero until accessed',
    body: 'Bundled reference files load only when Claude reads them. Scripts run through bash, so only their output enters context — never the code itself.',
  },
]

export default function HowTheyWork() {
  return (
    <section id="how" className="section section-alt">
      <h2>How skills work: progressive disclosure</h2>
      <p className="section-lead">
        Skills load information in stages as needed, rather than consuming context
        upfront — like an onboarding guide you'd hand a new team member, where they read
        the chapter they need when they need it.
      </p>
      <div className="levels">
        {levels.map((l) => (
          <article key={l.level} className="level">
            <span className="level-badge">{l.level}</span>
            <h3>{l.name}</h3>
            <p className="level-meta">
              <span>⏱ {l.when}</span>
              <span>🎟 {l.cost}</span>
            </p>
            <p>{l.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
