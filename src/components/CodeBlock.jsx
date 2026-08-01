import { useState } from 'react'

export default function CodeBlock({ title, children }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div className="codeblock">
      <div className="codeblock-bar">
        <span className="codeblock-title">{title}</span>
        <button className="codeblock-copy" onClick={copy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  )
}
