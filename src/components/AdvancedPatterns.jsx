import CodeBlock from './CodeBlock.jsx'

const dynamicContext = `---
name: pr-summary
description: Summarize changes in a pull request
context: fork
agent: Explore
allowed-tools: Bash(gh *)
---

## Pull request context
- PR diff: !\`gh pr diff\`
- PR comments: !\`gh pr view --comments\`
- Changed files: !\`gh pr diff --name-only\`

## Your task
Summarize this pull request...`

const deploySkill = `---
name: deploy
description: Deploy the application to production
disable-model-invocation: true
---

Deploy $ARGUMENTS to production:

1. Run the test suite
2. Build the application
3. Push to the deployment target
4. Verify the deployment succeeded`

const commitSkill = `---
name: commit
description: Stage and commit the current changes
disable-model-invocation: true
allowed-tools: Bash(git add *) Bash(git commit *) Bash(git status *)
---`

export default function AdvancedPatterns() {
  return (
    <section id="advanced" className="section">
      <h2>Advanced patterns</h2>

      <div className="pattern">
        <div className="pattern-info">
          <h3>Inject dynamic context</h3>
          <p>
            The <code>!`command`</code> syntax runs shell commands <em>before</em> the
            skill content reaches Claude — the output replaces the placeholder, so Claude
            receives actual data, not the command. Combine with{' '}
            <code>context: fork</code> to run the whole skill in an isolated subagent, and{' '}
            <code>agent: Explore</code> for read-only research work.
          </p>
        </div>
        <CodeBlock title="pr-summary/SKILL.md">{dynamicContext}</CodeBlock>
      </div>

      <div className="pattern">
        <div className="pattern-info">
          <h3>Manual-only workflows with arguments</h3>
          <p>
            <code>disable-model-invocation: true</code> keeps side-effect-heavy workflows
            in your hands — you don't want Claude deciding to deploy just because the code
            looks ready. <code>$ARGUMENTS</code> is replaced with whatever you type after
            the skill name, so <code>/deploy staging</code> deploys staging.
          </p>
        </div>
        <CodeBlock title="deploy/SKILL.md">{deploySkill}</CodeBlock>
      </div>

      <div className="pattern">
        <div className="pattern-info">
          <h3>Pre-approve tools</h3>
          <p>
            The <code>allowed-tools</code> field grants permission for listed tools during
            the turn that invokes the skill, so Claude can run them without prompting you.
            The grant clears when you send your next message. Perfect for a commit skill
            that needs git access but nothing else.
          </p>
        </div>
        <CodeBlock title="commit/SKILL.md">{commitSkill}</CodeBlock>
      </div>
    </section>
  )
}
