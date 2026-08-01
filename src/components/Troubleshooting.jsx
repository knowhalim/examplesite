const items = [
  {
    q: 'Skill not triggering?',
    a: 'Check the description includes keywords users would naturally say. Verify the skill appears when you ask "What skills are available?". Try rephrasing your request to match the description, or invoke it directly with /skill-name. If the frontmatter YAML is malformed, the skill body still loads but Claude has no description to match against — run with --debug to see the parse error.',
  },
  {
    q: 'Skill triggers too often?',
    a: 'Make the description more specific, or add disable-model-invocation: true if you only ever want manual invocation.',
  },
  {
    q: 'Skill stopped influencing behavior mid-session?',
    a: "The content is usually still in context — the model is choosing other approaches. Strengthen the description and instructions, or use hooks to enforce behavior deterministically. After compaction, re-invoke the skill to restore its full content.",
  },
  {
    q: 'Descriptions getting cut short?',
    a: 'The skill listing has a character budget (about 1% of the context window), and each description is capped at 1,536 characters. Put the key use case first, trim low-priority skills to "name-only" via skillOverrides, and run /doctor to see the listing\'s context cost.',
  },
  {
    q: 'Want to measure if a skill actually helps?',
    a: 'Install the skill-creator plugin (/plugin install skill-creator@claude-plugins-official). It stores test cases, runs isolated with-skill vs. without-skill comparisons, grades assertions, and even tunes your description against should-trigger and should-not-trigger prompts.',
  },
]

export default function Troubleshooting() {
  return (
    <section id="troubleshooting" className="section section-alt">
      <h2>Troubleshooting & iteration</h2>
      <p className="section-lead">
        Seeing a skill trigger tells you Claude found it — not that it did what you
        intended. Measure both: does it invoke on the prompts it should, and does the
        output match what you expect when it does?
      </p>
      <div className="faq">
        {items.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
