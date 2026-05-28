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
import './App.css'

const logoSrc = '/logo-asc.svg'

const activities = [
  {
    icon: Activity,
    title: 'Athlétisme',
    text: 'Bouger, progresser et retrouver une pratique sportive régulière.',
  },
  {
    icon: Leaf,
    title: 'Yoga',
    text: 'Bien-être, respiration, mobilité et détente dans un cadre convivial.',
  },
  {
    icon: Users,
    title: 'Zumba',
    text: 'Activité dynamique, accessible et collective pour tous les niveaux.',
  },
  {
    icon: Dumbbell,
    title: 'Musculation',
    text: 'Renforcement, remise en forme et accompagnement progressif.',
  },
  {
    icon: Bike,
    title: 'Cyclisme',
    text: 'Sorties sportives et loisirs autour d’Ablon-sur-Seine.',
  },
  {
    icon: Waves,
    title: 'Canoë',
    text: 'Initiation et pratique au bord de Seine, dans un cadre sécurisé.',
  },
]

const values = [
  'Sport pour tous',
  'Lien social',
  'Bien-être',
  'Intergénérationnel',
  'Convivialité',
  'Vie locale',
]

function App() {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <nav className="navbar" aria-label="Navigation principale">
          <a href="#accueil" className="brand" aria-label="ASC Ablon-sur-Seine - accueil">
            <span className="brand-logo">
              <img src={logoSrc} alt="Logo ASC Ablon-sur-Seine" />
            </span>
            <span>
              <span className="brand-kicker">Ablon-sur-Seine</span>
              <span className="brand-name">Association Sportive & Conviviale</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#mission">Mission</a>
            <a href="#activites">Activités</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#contact" className="nav-cta">
              Nous rejoindre
            </a>
          </div>
        </nav>

        <div id="accueil" className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-copy"
          >
            <p className="eyebrow">Le sport, la nature, la convivialité</p>
            <h1>Ensemble, bougeons Ablon-sur-Seine.</h1>
            <p className="hero-text">
              Une association locale dédiée au sport, au bien-être et au lien social, avec
              des activités accessibles aux jeunes, adultes et seniors.
            </p>
            <div className="hero-actions">
              <a href="#activites" className="button button-light">
                Découvrir les activités <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#tarifs" className="button button-outline">
                Voir les adhésions
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="hero-card"
          >
            <div className="hero-card-inner">
              <img src={logoSrc} alt="ASC Ablon-sur-Seine" className="hero-card-logo" />
              <div className="hero-card-overlay" />
              <div className="hero-card-content">
                <p className="card-kicker">ASC Ablon-sur-Seine</p>
                <h2>Sport & nature au bord de Seine</h2>
                <p>
                  Des séances, sorties et moments collectifs pour créer une dynamique
                  positive dans la commune.
                </p>
                <div className="audiences" aria-label="Publics accueillis">
                  <span>Jeunes</span>
                  <span>Adultes</span>
                  <span>Seniors</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="mission" className="section mission-section">
        <div className="section-heading">
          <p className="section-kicker">Notre mission</p>
          <h2>Promouvoir le sport, le bien-être et le lien social.</h2>
        </div>
        <div className="mission-card">
          <p>
            L’ASC Ablon-sur-Seine accueille les habitants de la commune et les personnes
            extérieures souhaitant participer à des activités sportives, de loisirs et de
            détente dans un cadre convivial et sécurisé.
          </p>
          <div className="value-grid">
            {values.map((value) => (
              <div className="value-item" key={value}>
                <ShieldCheck size={20} aria-hidden="true" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="activites" className="section activities-section">
        <div className="section-heading wide-heading">
          <p className="section-kicker">Activités</p>
          <h2>Des activités variées, accessibles et conviviales.</h2>
        </div>
        <div className="activities-grid">
          {activities.map(({ icon: Icon, title, text }) => (
            <article className="activity-card" key={title}>
              <div className="activity-icon">
                <Icon size={26} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tarifs" className="section pricing-section">
        <div className="section-heading pricing-heading">
          <p className="section-kicker">Adhésion</p>
          <h2>Pour tous les âges, tous les niveaux.</h2>
        </div>
        <div className="pricing-grid">
          <article className="price-card price-card-primary">
            <p>Habitants d’Ablon</p>
            <strong>25€</strong>
            <span>Adhésion annuelle pour les habitants de la commune.</span>
          </article>
          <article className="price-card price-card-secondary">
            <p>Extérieurs</p>
            <strong>35€</strong>
            <span>Adhésion annuelle pour les personnes extérieures.</span>
          </article>
        </div>
      </section>

      <section className="local-section">
        <div className="local-grid">
          <div>
            <p className="section-kicker section-kicker-light">Vie locale</p>
            <h2>Une association utile à la ville et aux générations.</h2>
            <p>
              L’association souhaite participer activement au dynamisme local, renforcer
              les liens entre habitants et proposer des actions positives pour la jeunesse
              comme pour les seniors.
            </p>
          </div>
          <aside className="next-card">
            <CalendarDays size={38} aria-hidden="true" />
            <h3>Prochaine étape</h3>
            <p>
              Présenter la maquette, valider les sections, puis intégrer les vrais visuels,
              les coordonnées définitives et le lien QR code.
            </p>
          </aside>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <div className="section-heading contact-heading">
            <p className="section-kicker">Contact</p>
            <h2>Rejoignez l’ASC Ablon-sur-Seine.</h2>
            <p>
              Une question, une inscription ou une demande d’information ? Contactez
              l’association pour découvrir les activités.
            </p>
          </div>
          <div className="contact-list">
            <a href="tel:0600000000">
              <Phone size={22} aria-hidden="true" />
              06 XX XX XX XX
            </a>
            <a href="mailto:contact@asc-ablon.fr">
              <Mail size={22} aria-hidden="true" />
              contact@asc-ablon.fr
            </a>
            <p>
              <MapPin size={22} aria-hidden="true" />
              Local associatif — Ablon-sur-Seine
            </p>
            <a href="mailto:contact@asc-ablon.fr" className="button button-primary">
              Contacter l’association <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
