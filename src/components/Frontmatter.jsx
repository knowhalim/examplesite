import CodeBlock from './CodeBlock.jsx'

const example = `---
name: my-skill
description: What this skill does and when to use it
disable-model-invocation: true
allowed-tools: Read Grep
---

Your skill instructions here...`

const fields = [
  ['name', 'Display name shown in skill listings. Defaults to the directory name. Max 64 chars, lowercase letters, numbers, and hyphens.'],
  ['description', "What the skill does and when to use it. Claude uses this to decide when to apply the skill — the single most important field. Put the key use case first."],
  ['disable-model-invocation', 'Set to true so only you can invoke the skill (via /name). Use for workflows with side effects, like deploys or commits.'],
  ['user-invocable', 'Set to false to hide the skill from the / menu. Use for background knowledge only Claude should invoke.'],
  ['allowed-tools', 'Tools Claude can use without asking permission during the turn that invokes this skill, e.g. Bash(git add *) Bash(git commit *).'],
  ['model', 'Model to use while this skill is active (same values as /model). Applies for the rest of the current turn.'],
  ['context', 'Set to fork to run the skill in an isolated subagent context. The skill content becomes the subagent prompt.'],
  ['agent', 'Which subagent type to run with when context: fork is set (Explore, Plan, general-purpose, or a custom agent).'],
  ['argument-hint', 'Autocomplete hint for expected arguments, e.g. [issue-number] or [filename] [format].'],
  ['paths', 'Glob patterns limiting when the skill activates — Claude auto-loads it only when working with matching files.'],
]

export default function Frontmatter() {
  return (
    <section id="frontmatter" className="section">
      <h2>Frontmatter reference</h2>
      <p className="section-lead">
        Configure skill behavior with YAML frontmatter between <code>---</code> markers at
        the top of SKILL.md. All fields are optional — only <code>description</code> is
        recommended, so Claude knows when to use the skill.
      </p>

      <div className="frontmatter-grid">
        <CodeBlock title="SKILL.md frontmatter">{example}</CodeBlock>
        <div className="field-list">
          {fields.map(([name, desc]) => (
            <div key={name} className="field">
              <code className="field-name">{name}</code>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="callout">
        <strong>Arguments:</strong> use <code>$ARGUMENTS</code> for everything passed after
        the skill name, <code>$0</code>, <code>$1</code>… for positional access, and{' '}
        <code>{'${CLAUDE_SKILL_DIR}'}</code> to reference files bundled with the skill.
        Running <code>/fix-issue 123</code> replaces <code>$ARGUMENTS</code> with{' '}
        <code>123</code> in the skill content.
      </div>
    </section>
  )
}
