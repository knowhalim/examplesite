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

const lessonOutline = [
  { num: 1, label: 'Understand what a Skill is', href: '#what' },
  { num: 2, label: 'Learn the SKILL.md anatomy', href: '#anatomy' },
  { num: 3, label: 'Build and run your first skill', href: '#quickstart' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <span className="level-badge">Tutorial</span>
        <p className="hero-eyebrow">Beginner friendly · No SDK required · ~5 minutes</p>
        <h1>
          Build your first Claude Skill, <span className="accent">step by step</span>
        </h1>
        <p className="hero-sub">
          In this hands-on tutorial you'll teach Claude a brand-new skill using a single{' '}
          <code>SKILL.md</code> file — no build step, no deployment. By the end, Claude
          will invoke your skill automatically or on demand with <code>/skill-name</code>.
        </p>
        <ul className="steps" style={{ gap: '0.55rem', margin: '1.4rem 0' }}>
          {lessonOutline.map((item) => (
            <li key={item.num} style={{ display: 'flex', alignItems: 'center' }}>
              <span className="step-num">{item.num}</span>
              <a href={item.href} style={{ color: 'var(--text)', textDecoration: 'none' }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#what">Start the tutorial →</a>
          <a className="btn btn-ghost" href="#quickstart">Skip to hands-on</a>
        </div>
        <ul className="hero-stats">
          <li><strong>3 steps</strong><span>from zero to working skill</span></li>
          <li><strong>1 file</strong><span>is all you'll write</span></li>
          <li><strong>~5 min</strong><span>total time needed</span></li>
        </ul>
      </div>
      <div className="hero-code">
        <CodeBlock title="What you'll build — ~/.claude/skills/summarize-changes/SKILL.md">{heroExample}</CodeBlock>
      </div>
    </section>
  )
}
