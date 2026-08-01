import CodeBlock from './CodeBlock.jsx'

const step1 = `mkdir -p ~/.claude/skills/summarize-changes`

const step2 = `---
description: Summarizes uncommitted changes and flags anything risky.
  Use when the user asks what changed, wants a commit message, or
  asks to review their diff.
---

## Current changes

!\`git diff HEAD\`

## Instructions

Summarize the changes above in two or three bullet points, then list
any risks you notice such as missing error handling, hardcoded values,
or tests that need updating. If the diff is empty, say there are no
uncommitted changes.`

const step3 = `# Let Claude invoke it automatically:
> What did I change?

# Or invoke it directly:
> /summarize-changes`

export default function QuickStart() {
  return (
    <section id="quickstart" className="section">
      <h2>Create your first skill in 5 minutes</h2>
      <p className="section-lead">
        This skill summarizes the uncommitted changes in your git repository and flags
        anything risky. The directory name becomes the command you type, and the
        description tells Claude when to load it automatically.
      </p>

      <ol className="steps">
        <li className="step">
          <div className="step-info">
            <h3><span className="step-num">1</span> Create the skill directory</h3>
            <p>
              Personal skills live in <code>~/.claude/skills/</code> and are available
              across all your projects. Use <code>.claude/skills/</code> inside a repo for
              project-only skills.
            </p>
          </div>
          <CodeBlock title="terminal">{step1}</CodeBlock>
        </li>

        <li className="step">
          <div className="step-info">
            <h3><span className="step-num">2</span> Write SKILL.md</h3>
            <p>
              Every skill needs a <code>SKILL.md</code> with two parts: YAML frontmatter
              between <code>---</code> markers that tells Claude <em>when</em> to use the
              skill, and markdown content with the instructions Claude follows when it
              runs. The <code>!`git diff HEAD`</code> line is dynamic context injection —
              Claude Code runs the command and inlines its output before Claude reads the
              skill.
            </p>
          </div>
          <CodeBlock title="~/.claude/skills/summarize-changes/SKILL.md">{step2}</CodeBlock>
        </li>

        <li className="step">
          <div className="step-info">
            <h3><span className="step-num">3</span> Test it</h3>
            <p>
              Open a git project, make a small edit, and start Claude Code. Ask something
              that matches the description, or invoke the skill by name. Claude Code
              watches skill directories, so edits are picked up live — no restart needed.
            </p>
          </div>
          <CodeBlock title="claude">{step3}</CodeBlock>
        </li>
      </ol>
    </section>
  )
}
