const practices = [
  {
    icon: '✂️',
    title: 'Concise is key',
    body: "The context window is a public good. Claude is already very smart — only add context it doesn't have. Challenge every paragraph: does it justify its token cost?",
  },
  {
    icon: '🎯',
    title: 'Write descriptions in third person',
    body: 'Include both what the skill does and when to use it, with the trigger words users would naturally say. "Extracts text from PDF files. Use when working with PDFs or forms." — not "Helps with documents."',
  },
  {
    icon: '🎚️',
    title: 'Match freedom to fragility',
    body: 'High freedom (heuristics) for open-ended tasks like code review. Low freedom ("run exactly this script") for fragile operations like database migrations.',
  },
  {
    icon: '🏷️',
    title: 'Name skills consistently',
    body: 'Use gerunds or clear noun phrases: processing-pdfs, analyzing-spreadsheets. Avoid vague names like helper, utils, or tools.',
  },
  {
    icon: '📂',
    title: 'Use progressive disclosure',
    body: 'Keep SKILL.md as a table of contents that points to reference files loaded only when needed. Split by domain so a sales question never loads the finance schema.',
  },
  {
    icon: '🧪',
    title: 'Build evaluations first',
    body: "Run Claude on representative tasks without the skill, document the failures, then write just enough skill content to fix them. Test in a fresh session — leftover context masks gaps.",
  },
  {
    icon: '🔁',
    title: 'Add feedback loops',
    body: 'Run validator → fix errors → repeat. Checklists Claude can copy and tick off prevent it from skipping critical steps in multistep workflows.',
  },
  {
    icon: '🤝',
    title: 'Develop skills with Claude',
    body: 'Ask one Claude to write the skill, test it with a fresh Claude on real tasks, then bring observations back for refinement. Claude understands the skill format natively.',
  },
]

export default function BestPractices() {
  return (
    <section id="best-practices" className="section section-alt">
      <h2>Best practices</h2>
      <p className="section-lead">
        Good skills are concise, well-structured, and tested with real usage. These are
        the patterns Anthropic recommends for skills that Claude discovers and uses
        reliably.
      </p>
      <div className="card-grid card-grid-4">
        {practices.map((p) => (
          <article key={p.title} className="card card-compact">
            <div className="card-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
