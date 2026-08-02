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

const heroStyles = `
  .hero { position: relative; isolation: isolate; }
  .hero::before, .hero::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 999px;
    filter: blur(70px);
    pointer-events: none;
  }
  .hero::before {
    width: 300px;
    height: 300px;
    top: 4%;
    left: -12%;
    background: rgba(217, 118, 80, 0.16);
  }
  .hero::after {
    width: 360px;
    height: 360px;
    right: -14%;
    bottom: 2%;
    background: rgba(113, 91, 255, 0.12);
  }
  .hero-copy { position: relative; }
  .hero-badge-row { display: flex; align-items: center; gap: .7rem; flex-wrap: wrap; }
  .hero .level-badge {
    box-shadow: 0 0 0 5px rgba(217, 118, 80, .1), 0 8px 28px rgba(217, 118, 80, .2);
  }
  .hero-live-dot {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    color: var(--text-dim);
    font-size: .78rem;
    font-weight: 600;
  }
  .hero-live-dot::before {
    content: '';
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    background: #63d68b;
    box-shadow: 0 0 0 5px rgba(99, 214, 139, .1);
  }
  .hero h1 {
    max-width: 12ch;
    letter-spacing: -.045em;
    text-wrap: balance;
  }
  .hero h1 .accent {
    color: transparent;
    background: linear-gradient(110deg, #ffb08f 0%, var(--accent) 45%, #9d8cff 100%);
    background-clip: text;
    -webkit-background-clip: text;
  }
  .hero-sub { max-width: 58ch; }
  .hero-outline {
    display: grid;
    gap: .55rem;
    margin: 1.45rem 0;
    padding: 0;
    list-style: none;
  }
  .hero-outline li { display: flex; align-items: center; }
  .hero-outline a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: .55rem .7rem;
    border: 1px solid transparent;
    border-radius: 10px;
    color: var(--text);
    text-decoration: none;
    transition: transform .2s ease, background .2s ease, border-color .2s ease;
  }
  .hero-outline a:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, .025);
    border-color: rgba(217, 118, 80, .28);
  }
  .hero .step-num {
    flex: 0 0 auto;
    box-shadow: 0 5px 16px rgba(217, 118, 80, .22);
  }
  .hero-actions .btn { transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
  .hero-actions .btn:hover { transform: translateY(-2px); }
  .hero-actions .btn-primary {
    box-shadow: 0 12px 30px rgba(217, 118, 80, .25);
  }
  .hero-actions .btn-primary:hover { box-shadow: 0 16px 38px rgba(217, 118, 80, .34); }
  .hero-actions .btn-ghost { background: rgba(255, 255, 255, .025); }
  .hero-stats {
    padding-top: 1.25rem;
    border-top: 1px solid rgba(155, 174, 194, .14);
  }
  .hero-code {
    position: relative;
    transform: rotate(1deg);
    transition: transform .3s ease;
  }
  .hero-code:hover { transform: rotate(0deg) translateY(-5px); }
  .hero-code::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(217, 118, 80, .52), transparent 42%, rgba(157, 140, 255, .35));
    filter: blur(1px);
  }
  .hero-code::after {
    content: 'Ready to use';
    position: absolute;
    top: -14px;
    right: 18px;
    padding: .28rem .65rem;
    border: 1px solid rgba(99, 214, 139, .28);
    border-radius: 999px;
    background: #10161f;
    color: #8ee6ad;
    font-size: .68rem;
    font-weight: 700;
    letter-spacing: .05em;
    text-transform: uppercase;
    box-shadow: 0 8px 24px rgba(0, 0, 0, .3);
  }
  @media (max-width: 900px) {
    .hero h1 { max-width: 15ch; }
    .hero-code { transform: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-code, .hero-outline a, .hero-actions .btn { transition: none; }
  }
`

export default function Hero() {
  return (
    <section className="hero" id="top">
      <style>{heroStyles}</style>
      <div className="hero-text hero-copy">
        <div className="hero-badge-row">
          <span className="level-badge">Tutorial</span>
          <span className="hero-live-dot">Practical, copy-ready lesson</span>
        </div>
        <p className="hero-eyebrow">Step by step · Beginner friendly · ~5 minutes</p>
        <h1>
          Build your first <span className="accent">Claude Skill</span>
        </h1>
        <p className="hero-sub">
          In this hands-on tutorial you'll teach Claude a brand-new skill using a single{' '}
          <code>SKILL.md</code> file — no build step, no deployment. By the end, Claude
          will invoke your skill automatically or on demand with <code>/skill-name</code>.
        </p>
        <ul className="hero-outline">
          {lessonOutline.map((item) => (
            <li key={item.num}>
              <a href={item.href}>
                <span className="step-num">{item.num}</span>
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
