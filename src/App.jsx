import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  Bike,
  CalendarDays,
  Dumbbell,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
  Waves,
} from 'lucide-react'

const css = `
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f8fafc;color:#0f172a;font-family:Arial,Helvetica,sans-serif}a{color:inherit}.site-shell{min-height:100vh;overflow-x:hidden}.hero-section{position:relative;overflow:hidden;color:white;background:linear-gradient(135deg,#063a8f,#047a87,#079b8f)}.navbar,.hero-grid,.section,.local-grid{width:min(1180px,calc(100% - 32px));margin:0 auto}.navbar{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:2rem;padding:1.5rem 0}.brand{display:inline-flex;align-items:center;gap:.9rem;text-decoration:none}.brand-logo{display:grid;place-items:center;width:5rem;height:4rem;padding:.25rem;overflow:hidden;border-radius:1.25rem;background:white;box-shadow:0 18px 35px rgba(15,23,42,.18)}.brand-logo svg{width:100%;height:100%}.brand-kicker,.brand-name{display:block}.brand-kicker{font-size:.75rem;font-weight:800;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.76)}.brand-name{margin-top:.2rem;font-weight:800}.nav-links{display:flex;align-items:center;gap:1.2rem;font-size:.95rem;font-weight:700}.nav-links a{text-decoration:none;color:rgba(255,255,255,.86)}.nav-cta{padding:.8rem 1.1rem;border-radius:999px;background:white;color:#063a8f!important}.hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.08fr .92fr;gap:4rem;align-items:center;padding:3rem 0 7rem}.eyebrow,.section-kicker,.card-kicker{margin:0;font-size:.82rem;font-weight:900;letter-spacing:.22em;text-transform:uppercase}.eyebrow{display:inline-flex;padding:.65rem 1rem;border:1px solid rgba(255,255,255,.26);border-radius:999px;background:rgba(255,255,255,.1)}.hero-copy h1{max-width:780px;margin:1.5rem 0 0;font-size:clamp(3.2rem,7vw,6.5rem);line-height:.94;letter-spacing:-.06em}.hero-text{max-width:660px;margin:1.8rem 0 0;color:rgba(255,255,255,.88);font-size:1.2rem;line-height:1.7}.hero-actions{display:flex;flex-wrap:wrap;gap:1rem;margin-top:2.3rem}.button{display:inline-flex;align-items:center;justify-content:center;gap:.55rem;min-height:3.25rem;padding:.95rem 1.45rem;border-radius:999px;font-weight:900;text-decoration:none}.button-light{background:white;color:#063a8f;box-shadow:0 18px 35px rgba(15,23,42,.2)}.button-outline{border:1px solid rgba(255,255,255,.38);color:white}.button-primary{width:100%;margin-top:.4rem;background:#063a8f;color:white}.hero-card{padding:1rem;border:1px solid rgba(255,255,255,.22);border-radius:2rem;background:rgba(255,255,255,.12);box-shadow:0 28px 75px rgba(15,23,42,.26)}.hero-card-inner{position:relative;min-height:430px;overflow:hidden;border-radius:1.5rem;background:linear-gradient(135deg,#d1fae5,#e0f2fe,#dbeafe)}.hero-card-logo{position:absolute;inset:0;width:100%;height:100%;padding:3rem;opacity:.32}.hero-card-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,.96),rgba(255,255,255,.78),rgba(255,255,255,.16))}.hero-card-content{position:relative;z-index:1;display:flex;min-height:430px;flex-direction:column;justify-content:space-between;padding:2rem;color:#0f172a}.card-kicker,.section-kicker{color:#047a87}.hero-card-content h2{max-width:360px;margin:.7rem 0 0;color:#063a8f;font-size:2rem;line-height:1.1}.hero-card-content p:not(.card-kicker){max-width:370px;margin:1rem 0 0;color:#475569;line-height:1.7}.audiences{display:grid;grid-template-columns:repeat(3,1fr);gap:.7rem}.audiences span{padding:1rem .5rem;border-radius:1rem;background:rgba(255,255,255,.9);color:#063a8f;font-weight:900;text-align:center}.section{padding:5.5rem 0}.mission-section,.pricing-section,.contact-card,.local-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:3rem;align-items:start}.section-heading h2,.local-grid h2{margin:.9rem 0 0;color:#0f172a;font-size:clamp(2.4rem,4vw,4rem);line-height:1.04;letter-spacing:-.045em}.wide-heading{max-width:780px}.mission-card,.contact-card{border-radius:2rem;background:white;box-shadow:0 24px 70px rgba(148,163,184,.28)}.mission-card{padding:2.2rem}.mission-card>p,.contact-heading>p{margin:0;color:#475569;font-size:1.08rem;line-height:1.8}.value-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:.9rem;margin-top:2rem}.value-item{display:flex;align-items:center;gap:.75rem;padding:1rem;border-radius:1rem;background:#f8fafc;color:#1e293b;font-weight:900}.value-item svg{color:#047a87}.activities-section{width:100%;max-width:none;padding-right:max(16px,calc((100% - 1180px)/2));padding-left:max(16px,calc((100% - 1180px)/2));background:white}.activities-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem;margin-top:3rem}.activity-card{padding:2rem;border:1px solid #f1f5f9;border-radius:2rem;background:#f8fafc}.activity-icon{display:grid;place-items:center;width:3.6rem;height:3.6rem;border-radius:1.25rem;color:white;background:linear-gradient(135deg,#063a8f,#079b8f)}.activity-card h3{margin:1.45rem 0 0;color:#0f172a;font-size:1.25rem}.activity-card p{margin:.75rem 0 0;color:#64748b;line-height:1.7}.pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.2rem}.price-card{padding:2.2rem;border-radius:2rem;color:white}.price-card-primary{background:#063a8f}.price-card-secondary{background:#047a87}.price-card p{margin:0;color:rgba(255,255,255,.72);font-size:.8rem;font-weight:900;letter-spacing:.18em;text-transform:uppercase}.price-card strong{display:block;margin-top:1.2rem;font-size:4.5rem;line-height:1}.price-card span{display:block;margin-top:1.1rem;color:rgba(255,255,255,.78);line-height:1.6}.local-section{background:#020617;color:white}.local-grid{padding:5.5rem 0;align-items:center}.section-kicker-light{color:#67e8f9}.local-grid h2{color:white}.local-grid p{max-width:720px;margin:1.5rem 0 0;color:rgba(255,255,255,.72);font-size:1.08rem;line-height:1.8}.next-card{padding:2rem;border:1px solid rgba(255,255,255,.12);border-radius:2rem;background:rgba(255,255,255,.06)}.next-card svg{color:#67e8f9}.contact-card{padding:2.5rem}.contact-list{display:grid;gap:1rem}.contact-list a,.contact-list p{display:flex;align-items:center;gap:1rem;margin:0;padding:1.1rem;border-radius:1.1rem;background:#f8fafc;color:#1e293b;font-weight:900;text-decoration:none}.contact-list svg{color:#047a87}@media(max-width:980px){.nav-links a:not(.nav-cta){display:none}.hero-grid,.mission-section,.pricing-section,.contact-card,.local-grid{grid-template-columns:1fr}.activities-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:640px){.nav-cta{display:none}.brand-name{font-size:.9rem}.hero-copy h1{font-size:3.15rem}.button,.hero-actions{width:100%}.activities-grid,.pricing-grid,.value-grid{grid-template-columns:1fr}.section,.local-grid{padding-top:4rem;padding-bottom:4rem}.hero-card-inner,.hero-card-content{min-height:360px}.audiences{grid-template-columns:1fr}}
`

const activities = [
  { icon: Activity, title: 'Athlétisme', text: 'Bouger, progresser et retrouver une pratique sportive régulière.' },
  { icon: Leaf, title: 'Yoga', text: 'Bien-être, respiration, mobilité et détente dans un cadre convivial.' },
  { icon: Users, title: 'Zumba', text: 'Activité dynamique, accessible et collective pour tous les niveaux.' },
  { icon: Dumbbell, title: 'Musculation', text: 'Renforcement, remise en forme et accompagnement progressif.' },
  { icon: Bike, title: 'Cyclisme', text: 'Sorties sportives et loisirs autour d’Ablon-sur-Seine.' },
  { icon: Waves, title: 'Canoë', text: 'Initiation et pratique au bord de Seine, dans un cadre sécurisé.' },
]

const values = ['Sport pour tous', 'Lien social', 'Bien-être', 'Intergénérationnel', 'Convivialité', 'Vie locale']

function AscLogo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 640 420" role="img" aria-label="Logo ASC Ablon-sur-Seine">
      <rect width="640" height="420" rx="44" fill="#ffffff" />
      <path d="M58 296c82-62 141-77 214-35 76 44 132 34 205-25 42-34 76-54 118-59" fill="none" stroke="#099b8f" strokeWidth="28" strokeLinecap="round" />
      <circle cx="452" cy="117" r="43" fill="#063a8f" />
      <path d="M403 161l-58 76 69-6 54 75" fill="none" stroke="#063a8f" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M380 181l-78 25" fill="none" stroke="#079b8f" strokeWidth="22" strokeLinecap="round" />
      <text x="68" y="144" fill="#063a8f" fontFamily="Arial, Helvetica, sans-serif" fontSize="84" fontWeight="900">ASC</text>
      <text x="72" y="195" fill="#047a87" fontFamily="Arial, Helvetica, sans-serif" fontSize="28" fontWeight="800" letterSpacing="2">ABLON-SUR-SEINE</text>
      <text x="72" y="235" fill="#0f172a" fontFamily="Arial, Helvetica, sans-serif" fontSize="24" fontWeight="700">Sport • Nature • Convivialité</text>
    </svg>
  )
}

function App() {
  return (
    <>
      <style>{css}</style>
      <main className="site-shell">
        <section className="hero-section">
          <nav className="navbar" aria-label="Navigation principale">
            <a href="#accueil" className="brand" aria-label="ASC Ablon-sur-Seine - accueil">
              <span className="brand-logo"><AscLogo /></span>
              <span><span className="brand-kicker">Ablon-sur-Seine</span><span className="brand-name">Association Sportive & Conviviale</span></span>
            </a>
            <div className="nav-links">
              <a href="#mission">Mission</a><a href="#activites">Activités</a><a href="#tarifs">Tarifs</a><a href="#contact" className="nav-cta">Nous rejoindre</a>
            </div>
          </nav>

          <div id="accueil" className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero-copy">
              <p className="eyebrow">Le sport, la nature, la convivialité</p>
              <h1>Ensemble, bougeons Ablon-sur-Seine.</h1>
              <p className="hero-text">Une association locale dédiée au sport, au bien-être et au lien social, avec des activités accessibles aux jeunes, adultes et seniors.</p>
              <div className="hero-actions"><a href="#activites" className="button button-light">Découvrir les activités <ArrowRight size={18} aria-hidden="true" /></a><a href="#tarifs" className="button button-outline">Voir les adhésions</a></div>
            </motion.div>
            <motion.aside initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }} className="hero-card">
              <div className="hero-card-inner"><AscLogo className="hero-card-logo" /><div className="hero-card-overlay" /><div className="hero-card-content"><div><p className="card-kicker">ASC Ablon-sur-Seine</p><h2>Sport & nature au bord de Seine</h2><p>Des séances, sorties et moments collectifs pour créer une dynamique positive dans la commune.</p></div><div className="audiences" aria-label="Publics accueillis"><span>Jeunes</span><span>Adultes</span><span>Seniors</span></div></div></div>
            </motion.aside>
          </div>
        </section>

        <section id="mission" className="section mission-section"><div className="section-heading"><p className="section-kicker">Notre mission</p><h2>Promouvoir le sport, le bien-être et le lien social.</h2></div><div className="mission-card"><p>L’ASC Ablon-sur-Seine accueille les habitants de la commune et les personnes extérieures souhaitant participer à des activités sportives, de loisirs et de détente dans un cadre convivial et sécurisé.</p><div className="value-grid">{values.map((value) => (<div className="value-item" key={value}><ShieldCheck size={20} aria-hidden="true" /><span>{value}</span></div>))}</div></div></section>

        <section id="activites" className="section activities-section"><div className="section-heading wide-heading"><p className="section-kicker">Activités</p><h2>Des activités variées, accessibles et conviviales.</h2></div><div className="activities-grid">{activities.map(({ icon: Icon, title, text }) => (<article className="activity-card" key={title}><div className="activity-icon"><Icon size={26} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>))}</div></section>

        <section id="tarifs" className="section pricing-section"><div className="section-heading pricing-heading"><p className="section-kicker">Adhésion</p><h2>Pour tous les âges, tous les niveaux.</h2></div><div className="pricing-grid"><article className="price-card price-card-primary"><p>Habitants d’Ablon</p><strong>25€</strong><span>Adhésion annuelle pour les habitants de la commune.</span></article><article className="price-card price-card-secondary"><p>Extérieurs</p><strong>35€</strong><span>Adhésion annuelle pour les personnes extérieures.</span></article></div></section>

        <section className="local-section"><div className="local-grid"><div><p className="section-kicker section-kicker-light">Vie locale</p><h2>Une association utile à la ville et aux générations.</h2><p>L’association souhaite participer activement au dynamisme local, renforcer les liens entre habitants et proposer des actions positives pour la jeunesse comme pour les seniors.</p></div><aside className="next-card"><CalendarDays size={38} aria-hidden="true" /><h3>Prochaine étape</h3><p>Présenter la maquette, valider les sections, puis intégrer les vrais visuels, les coordonnées définitives et le lien QR code.</p></aside></div></section>

        <section id="contact" className="section contact-section"><div className="contact-card"><div className="section-heading contact-heading"><p className="section-kicker">Contact</p><h2>Rejoignez l’ASC Ablon-sur-Seine.</h2><p>Une question, une inscription ou une demande d’information ? Contactez l’association pour découvrir les activités.</p></div><div className="contact-list"><a href="tel:0600000000"><Phone size={22} aria-hidden="true" />06 XX XX XX XX</a><a href="mailto:contact@asc-ablon.fr"><Mail size={22} aria-hidden="true" />contact@asc-ablon.fr</a><p><MapPin size={22} aria-hidden="true" />Local associatif — Ablon-sur-Seine</p><a href="mailto:contact@asc-ablon.fr" className="button button-primary">Contacter l’association <ArrowRight size={18} aria-hidden="true" /></a></div></div></section>
      </main>
    </>
  )
}

export default App
