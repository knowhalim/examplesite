import CodeBlock from './CodeBlock.jsx'

const heroExample = `---
description: Summarizes uncommitted changes and flags anything
  risky. Use when the user asks what changed or wants a
  commit message.
---

## Current changes

!\`git diff HEAD\`

## Instructions

Summarize the changes above in two or three bullet points,
then list any risks you notice. If the diff is empty, say
there are no uncommitted changes.`

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <p className="hero-eyebrow">A practical guide to Claude Agent Skills</p>
        <h1>
          Teach Claude a new skill with <span className="accent">one markdown file</span>
        </h1>
        <p className="hero-sub">
          Agent Skills extend what Claude can do. Drop a <code>SKILL.md</code> file into a
          folder, and Claude adds it to its toolkit — invoked automatically when relevant,
          or directly with <code>/skill-name</code>. No SDK, no build step, no deployment.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#quickstart">Create your first skill →</a>
          <a className="btn btn-ghost" href="#what">Learn the basics</a>
        </div>
        <ul className="hero-stats">
          <li><strong>1 file</strong><span>is all it takes</span></li>
          <li><strong>~5 min</strong><span>to your first skill</span></li>
          <li><strong>0 tokens</strong><span>until a skill is used</span></li>
        </ul>
      </div>
      <div className="hero-code">
        <CodeBlock title="~/.claude/skills/summarize-changes/SKILL.md">{heroExample}</CodeBlock>
      </div>
    </section>
  )
}
