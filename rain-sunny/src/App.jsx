import { useEffect, useRef, useState } from 'react'
import { site, nav, hero, menu, gallery, reviews } from './data/site'

/* Fade-up on scroll. Add className via <Reveal> anywhere. */
function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (e.target.classList.add('in'), io.disconnect()), { threshold: 0.12 })
    io.observe(ref.current); return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>
}
const Section = ({ id, dark, title, eyebrow, cn, children }) => (
  <section id={id} className={`relative px-5 py-20 md:py-28 ${dark ? 'bg-ink text-paper' : ''}`}>
    <div className="mx-auto max-w-6xl">
      <Reveal className="mb-12 max-w-2xl">
        <p className="font-cn text-2xl text-seal">{cn}</p>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
        <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">{title}</h2>
      </Reveal>
      {children}
    </div>
  </section>
)
const Btn = ({ href, children, ghost, ...p }) => (
  <a href={href} {...p} className={`inline-block rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5 ${ghost ? 'border border-paper/60 text-paper hover:bg-paper hover:text-ink' : 'bg-seal text-white hover:bg-seal-dark'}`}>{children}</a>
)
const field = 'w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-ink outline-none focus:border-seal'

function Header() {
  const [open, setOpen] = useState(false), [small, setSmall] = useState(false)
  useEffect(() => { const f = () => setSmall(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-ink/95 text-paper backdrop-blur transition-all ${small ? 'py-1.5 shadow-lg' : 'py-3'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <img src="/logo.png" alt={`${site.name} logo`} className={`rounded-full bg-white transition-all ${small ? 'h-9 w-9' : 'h-14 w-14'}`} />
          <span className="hidden font-display text-lg font-bold sm:block">{site.name}<span className="ml-2 font-cn text-seal">{site.cn}</span></span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-5 text-[13px] font-medium xl:flex">
          {nav.map(([l, h]) => <a key={h} href={h} className="hover:text-seal">{l}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${site.phone}`} className="rounded-full bg-seal px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-seal-dark">Call</a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="p-2 text-2xl xl:hidden">{open ? '✕' : '☰'}</button>
        </div>
      </div>
      {open && <nav aria-label="Mobile" className="grid grid-cols-2 gap-1 border-t border-paper/10 px-4 py-3 xl:hidden">
        {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="rounded px-3 py-3 font-medium hover:bg-white/10">{l}</a>)}
      </nav>}
    </header>
  )
}

const Hero = () => (
  <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ink px-5 pt-24 text-paper">
    <img src={hero} alt="Spicy beef noodle soup, lamb skewers and dumplings at Rain & Sunny Chinese Noodles" className="absolute inset-0 h-full w-full object-cover object-right opacity-70" fetchpriority="high" />
    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
    <div className="waves absolute inset-x-0 bottom-0 h-24 opacity-60" />
    <div className="relative mx-auto w-full max-w-6xl">
      <p className="font-cn text-5xl text-seal md:text-7xl">{site.cn}</p>
      <h1 className="mt-3 max-w-2xl text-5xl font-extrabold leading-[1.02] md:text-7xl">Hand-pulled Chinese noodles in downtown London, Ontario</h1>
      <p className="mt-5 max-w-xl text-lg text-paper/80">{site.tagline} Rated {site.rating}★ by neighbours who come back for the broth, the chew and the house chilli oil.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Btn href="#menu">View Menu</Btn><Btn href="#order" ghost>Order Online</Btn><Btn href="#reservations" ghost>Reserve a Table</Btn></div>
    </div>
  </section>
)

const About = () => (
  <Section id="about" eyebrow="Our Story" cn="关于我们" title="Rain or sunshine, there's always a warm bowl waiting">
    <div className="grid items-center gap-10 md:grid-cols-2">
      <Reveal className="space-y-4 text-lg text-ink/80">
        <p>Rain & Sunny is a northern Chinese noodle house in the heart of downtown London. Our name, 雨晴 — “rain and clearing sky” — is a promise: whatever the weather, a bowl of noodle soup makes the day better.</p>
        <p>Noodles are hand-pulled or knife-shaved depending on the dish, broths are simmered for depth, and the chilli oil, beef rolls and pickles are made in house. Guests tell us the portions are generous and the flavours taste like home.</p>
        <p className="font-bold text-ink">Fresh noodles · Slow-braised beef · Authentic northern Chinese street food</p>
      </Reveal>
      <Reveal className="grid grid-cols-2 gap-3">
        <img src="/images/beef-noodle.png" alt="Hand-pulled beef noodles with bok choy" loading="lazy" className="h-72 w-full rounded-2xl object-cover" />
        <img src="/images/dumplings.png" alt="Hand-folded Chinese dumplings" loading="lazy" className="mt-8 h-72 w-full rounded-2xl object-cover" />
      </Reveal>
    </div>
  </Section>
)

const Menu = () => (
  <Section id="menu" dark eyebrow="Menu" cn="菜单" title="Noodle soups, chilli oil noodles & street snacks">
    <p className="-mt-6 mb-10 max-w-xl text-paper/60">Ask your server about today's specials, spice levels and prices. Dishes and prices may change.</p>
    <div className="space-y-14">
      {menu.map((c) => (
        <div key={c.title}>
          <h3 className="mb-6 flex items-baseline gap-3 border-b border-gold/30 pb-2 text-2xl font-bold"><span className="font-cn text-seal">{c.cn}</span>{c.title}</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.items.map((i) => (
              <Reveal key={i.name} className="overflow-hidden rounded-2xl bg-ink-soft ring-1 ring-white/10">
                {i.image && <img src={i.image} alt={i.name} loading="lazy" className="h-48 w-full object-cover transition duration-500 hover:scale-105" />}
                <div className="p-5"><div className="flex justify-between gap-2"><h4 className="font-display text-lg font-bold">{i.name}</h4>{i.price && <span className="text-gold">{i.price}</span>}</div><p className="mt-1 text-sm text-paper/70">{i.desc}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
)

function Reservations() {
  const [f, setF] = useState({ name: '', phone: '', date: '', time: '', guests: '2', notes: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const body = Object.entries(f).map(([k, v]) => `${k}: ${v}`).join('\n')
    location.href = `mailto:${site.email}?subject=${encodeURIComponent('Table reservation request')}&body=${encodeURIComponent(body)}`
  }
  return (
    <Section id="reservations" eyebrow="Reservations" cn="订座" title="Reserve a table in downtown London">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2"><img src="/images/interior-dark.png" alt="Dining room with marble walls and warm lantern lights" loading="lazy" className="h-72 w-full rounded-2xl object-cover md:h-full" /></Reveal>
        <Reveal as="form" className="grid gap-3 md:col-span-3 sm:grid-cols-2" onSubmit={submit}>
          <input required placeholder="Your name" value={f.name} onChange={set('name')} className={field} aria-label="Name" />
          <input required type="tel" placeholder="Phone" value={f.phone} onChange={set('phone')} className={field} aria-label="Phone" />
          <input required type="date" value={f.date} onChange={set('date')} className={field} aria-label="Date" />
          <input required type="time" min="11:00" max="19:30" value={f.time} onChange={set('time')} className={field} aria-label="Time" />
          <select value={f.guests} onChange={set('guests')} className={`${field} sm:col-span-2`} aria-label="Guests">{[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n} guest{n > 1 && 's'}</option>)}</select>
          <textarea placeholder="Special requests" value={f.notes} onChange={set('notes')} rows="3" className={`${field} sm:col-span-2`} aria-label="Notes" />
          <button className="rounded-full bg-seal px-7 py-3 font-bold uppercase tracking-wider text-white hover:bg-seal-dark sm:col-span-2">Request Reservation</button>
          <p className="text-sm text-ink/60 sm:col-span-2">Prefer to talk? Call <a className="font-bold text-seal" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>. We'll confirm your booking.</p>
        </Reveal>
      </div>
    </Section>
  )
}

const Order = () => (
  <section id="order" className="waves bg-seal px-5 py-20 text-white">
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="font-cn text-2xl">外卖</p>
      <h2 className="text-4xl font-extrabold md:text-5xl">Order Chinese noodles online for pickup or delivery</h2>
      <p className="mt-4 text-white/85">Spicy beef noodle soup, dumplings and skewers — hot at your door in London, ON.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {site.orderLinks.map((o) => <a key={o.url} href={o.url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-ink">{o.label}</a>)}
        <a href={`tel:${site.phone}`} className="rounded-full border border-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-seal">Call to Order</a>
      </div>
    </Reveal>
  </section>
)

const Gallery = () => (
  <Section id="gallery" eyebrow="Gallery" cn="图片" title="A look inside the kitchen and dining room">
    <div className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3">
      {gallery.map((g, i) => <Reveal key={g}><img src={g} alt={`Rain & Sunny Chinese Noodles gallery photo ${i + 1}`} loading="lazy" className="w-full rounded-xl transition duration-500 hover:scale-[1.03]" /></Reveal>)}
    </div>
  </Section>
)

const Location = () => (
  <Section id="location" dark eyebrow="Visit Us" cn="地址" title="Find us on King Street, downtown London">
    <div className="grid gap-8 md:grid-cols-2">
      <Reveal>
        <p className="text-xl">{site.address}, Canada</p>
        <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-gold underline">Get directions on Google Maps</a>
        <table className="mt-8 w-full text-left"><caption className="sr-only">Opening hours</caption><tbody>
          {site.hours.map(([d, h]) => <tr key={d} className="border-b border-white/10"><th className="py-3 font-medium">{d}</th><td className="py-3 text-right text-paper/80">{h}</td></tr>)}
        </tbody></table>
        <p className="mt-3 text-sm text-paper/50">Hours may differ on holidays.</p>
      </Reveal>
      <Reveal><iframe title="Map to Rain & Sunny Chinese Noodles" src={site.mapsEmbed} loading="lazy" className="h-96 w-full rounded-2xl border-0 md:h-full" /></Reveal>
    </div>
  </Section>
)

const Reviews = () => (
  <Section id="reviews" eyebrow="Reviews" cn="好评" title={`Rated ${site.rating}★ by London noodle lovers`}>
    <div className="grid gap-5 md:grid-cols-2">
      {reviews.map((r) => (
        <Reveal as="figure" key={r.name} className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="text-gold" aria-label="5 stars">★★★★★</div>
          <blockquote className="mt-2 text-ink/80">“{r.text}”</blockquote>
          <figcaption className="mt-3 font-bold">{r.name}</figcaption>
        </Reveal>
      ))}
    </div>
    <div className="mt-10 text-center"><Btn href={site.reviewLink} target="_blank" rel="noopener noreferrer">Write a Review</Btn></div>
  </Section>
)

function Catering() {
  return (
    <Section id="catering" dark eyebrow="Catering & Events" cn="宴会" title="Chinese catering and group dining in London, ON">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal className="space-y-4 text-lg text-paper/80">
          <p>Bring hand-pulled noodles, dumplings and skewers to your office lunch, birthday or family celebration. We also welcome large-party dining in our restaurant.</p>
          <ul className="list-disc space-y-1 pl-5"><li>Office lunches & team events</li><li>Birthdays & family gatherings</li><li>Custom platters for any group size</li></ul>
          <Btn href={`mailto:${site.email}?subject=Catering enquiry`}>Request a Quote</Btn>
        </Reveal>
        <Reveal><img src="/images/interior-classic.png" alt="Bright dining room ready for group events" loading="lazy" className="h-80 w-full rounded-2xl object-cover" /></Reveal>
      </div>
    </Section>
  )
}

function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const submit = (e) => { e.preventDefault(); location.href = `mailto:${site.email}?subject=${encodeURIComponent('Website enquiry from ' + f.name)}&body=${encodeURIComponent(f.message + '\n\n' + f.name + ' (' + f.email + ')')}` }
  return (
    <Section id="contact" eyebrow="Contact" cn="联系我们" title="Say hello — we'd love to hear from you">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal className="space-y-3 text-lg">
          <p><b>Phone:</b> <a className="text-seal" href={`tel:${site.phone}`}>{site.phoneDisplay}</a></p>
          <p><b>Email:</b> <a className="text-seal" href={`mailto:${site.email}`}>{site.email}</a></p>
          <p><b>Address:</b> {site.address}</p>
        </Reveal>
        <Reveal as="form" className="grid gap-3" onSubmit={submit}>
          <input required placeholder="Name" aria-label="Name" className={field} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <input required type="email" placeholder="Email" aria-label="Email" className={field} onChange={(e) => setF({ ...f, email: e.target.value })} />
          <textarea required rows="4" placeholder="Message" aria-label="Message" className={field} onChange={(e) => setF({ ...f, message: e.target.value })} />
          <button className="rounded-full bg-ink px-7 py-3 font-bold uppercase tracking-wider text-paper hover:bg-seal">Send Message</button>
        </Reveal>
      </div>
    </Section>
  )
}

const Footer = () => (
  <footer className="bg-ink px-5 py-12 text-paper/70">
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
      <div><img src="/logo.png" alt="" className="h-20 w-20 rounded-full bg-white" /><p className="mt-3 font-display font-bold text-paper">{site.name}</p><p className="text-sm">{site.tagline}</p></div>
      <div className="text-sm"><p className="mb-2 font-bold text-paper">Explore</p><div className="grid grid-cols-2 gap-1">{nav.map(([l, h]) => <a key={h} href={h} className="hover:text-seal">{l}</a>)}</div></div>
      <div className="text-sm"><p className="mb-2 font-bold text-paper">Visit</p><p>{site.address}</p><a href={`tel:${site.phone}`} className="hover:text-seal">{site.phoneDisplay}</a>
        <div className="mt-2 flex gap-4">{Object.entries(site.social).map(([k, u]) => u && <a key={k} href={u} className="capitalize hover:text-seal" target="_blank" rel="noopener noreferrer">{k}</a>)}</div></div>
    </div>
    <p className="mt-10 text-center text-xs">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
  </footer>
)

export default function App() {
  return <><Header /><main><Hero /><About /><Menu /><Reservations /><Order /><Gallery /><Location /><Reviews /><Catering /><Contact /></main><Footer /></>
}
