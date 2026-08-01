const links = [
  ['#what', 'What are Skills'],
  ['#how', 'How They Work'],
  ['#quickstart', 'Quick Start'],
  ['#anatomy', 'Anatomy'],
  ['#frontmatter', 'Frontmatter'],
  ['#best-practices', 'Best Practices'],
  ['#advanced', 'Advanced'],
  ['#troubleshooting', 'Troubleshooting'],
]

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-logo">
        <span className="nav-logo-mark">⚡</span> Agent Skills, Made Easy
      </a>
      <nav className="nav-links">
        {links.map(([href, label]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </header>
  )
}
