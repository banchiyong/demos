import { hero, highlights, navItems, notices, partners, programs } from '@/data/siteData';

export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">GTSO</div>
        <nav>
          {navItems.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </nav>
        <button className="ghost">통합검색</button>
      </header>

      <section className="hero card">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="desc">{hero.description}</p>
        <div className="actions">
          <button>{hero.ctaPrimary}</button>
          <button className="ghost">{hero.ctaSecondary}</button>
        </div>
      </section>

      <section className="metrics">
        {highlights.map((item) => (
          <article className="card" key={item.label}>
            <p>{item.label}</p>
            <h2>{item.value}</h2>
            <small>{item.detail}</small>
          </article>
        ))}
      </section>

      <section className="split">
        <article className="card">
          <h3>핵심사업</h3>
          <div className="list">
            {programs.map((program) => (
              <div className="row" key={program.title}>
                <div>
                  <h4>{program.title}</h4>
                  <p>{program.summary}</p>
                </div>
                <div className="tags">
                  {program.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <h3>최신 소식</h3>
          <div className="list compact">
            {notices.map((notice) => (
              <div className="row" key={notice.title}>
                <p className="pill">{notice.category}</p>
                <div>
                  <h4>{notice.title}</h4>
                  <small>{notice.date}</small>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="partners card">
        <p>협력 네트워크</p>
        <div>
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
