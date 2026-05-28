import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Bike,
  CalendarDays,
  CheckCircle2,
  Dumbbell,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import "./App.css";

const logoSrc = "/logo-asc.png";

const activities = [
  {
    icon: Activity,
    title: "Athlétisme",
    text: "Une pratique sportive régulière pour progresser, se dépasser et retrouver le plaisir de bouger.",
  },
  {
    icon: Leaf,
    title: "Yoga",
    text: "Respiration, mobilité, détente et bien-être dans un cadre accessible et bienveillant.",
  },
  {
    icon: Users,
    title: "Zumba",
    text: "Une activité dynamique, collective et conviviale pour garder la forme avec énergie.",
  },
  {
    icon: Dumbbell,
    title: "Musculation",
    text: "Renforcement musculaire, remise en forme et accompagnement progressif selon les niveaux.",
  },
  {
    icon: Bike,
    title: "Cyclisme",
    text: "Sorties loisirs et sportives autour d’Ablon-sur-Seine, dans un esprit de groupe.",
  },
  {
    icon: Waves,
    title: "Canoë",
    text: "Découverte et pratique au bord de Seine, dans un cadre naturel et sécurisé.",
  },
];

const values = [
  "Sport accessible",
  "Convivialité",
  "Santé & bien-être",
  "Lien social",
  "Intergénérationnel",
  "Vie locale",
];

const stats = [
  { value: "25€", label: "Habitants d’Ablon" },
  { value: "35€", label: "Extérieurs" },
  { value: "6+", label: "Activités proposées" },
];

function App() {
  return (
    <main className="site-shell">
      <section className="hero-section" id="accueil">
        <div className="hero-bg hero-bg-one" />
        <div className="hero-bg hero-bg-two" />

        <header className="navbar">
          <a href="#accueil" className="brand" aria-label="ASC Ablon-sur-Seine">
            <span className="brand-logo">
              <img src={logoSrc} alt="Logo ASC Ablon-sur-Seine" />
            </span>
            <span>
              <span className="brand-kicker">Ablon-sur-Seine</span>
              <span className="brand-name">
                Association Sportive & Conviviale
              </span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Navigation principale">
            <a href="#mission">Mission</a>
            <a href="#activites">Activités</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#contact" className="nav-cta">
              Nous rejoindre
            </a>
          </nav>
        </header>

        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="hero-copy"
          >
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Sport, nature & convivialité
            </p>

            <h1>Un club local pour faire bouger toutes les générations.</h1>

            <p className="hero-text">
              L’ASC Ablon-sur-Seine rassemble les habitants autour d’activités
              sportives, de bien-être et de loisirs dans un cadre accessible,
              chaleureux et ancré dans la vie locale.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Rejoindre l’association{" "}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#activites" className="button button-secondary">
                Voir les activités
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="hero-panel"
          >
            <div className="hero-logo-card">
              <img src={logoSrc} alt="ASC Ablon-sur-Seine" />
            </div>

            <div className="hero-panel-content">
              <p>Association Sportive & Conviviale</p>
              <h2>Une dynamique sportive au cœur d’Ablon-sur-Seine.</h2>
              <div className="hero-tags">
                <span>Jeunes</span>
                <span>Adultes</span>
                <span>Seniors</span>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="stats-band" aria-label="Informations clés">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="mission" className="section split-section">
        <div className="section-heading">
          <p className="section-kicker">Notre mission</p>
          <h2>Créer du lien par le sport, le bien-être et la convivialité.</h2>
        </div>

        <div className="premium-card mission-card">
          <p>
            L’ASC Ablon-sur-Seine accueille les habitants de la commune et les
            personnes extérieures souhaitant pratiquer une activité sportive ou
            de loisirs dans une ambiance simple, positive et sécurisée.
          </p>

          <div className="values-grid">
            {values.map((value) => (
              <div className="value-item" key={value}>
                <ShieldCheck size={19} aria-hidden="true" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="activites" className="section activities-section">
        <div className="section-heading section-heading-center">
          <p className="section-kicker">Activités</p>
          <h2>Une offre variée pour pratiquer à son rythme.</h2>
          <p>
            Des activités complémentaires pour bouger, se renforcer, se détendre
            et partager des moments collectifs.
          </p>
        </div>

        <div className="activities-grid">
          {activities.map(({ icon: Icon, title, text }) => (
            <article className="activity-card" key={title}>
              <div className="activity-icon">
                <Icon size={25} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="local-section">
        <div className="local-content">
          <div>
            <p className="section-kicker section-kicker-light">Vie locale</p>
            <h2>Une association pensée pour la commune et ses habitants.</h2>
            <p>
              Le projet contribue au dynamisme local, favorise les rencontres
              entre générations et encourage une pratique sportive accessible au
              plus grand nombre.
            </p>
          </div>

          <div className="local-card">
            <CalendarDays size={36} aria-hidden="true" />
            <h3>Prochaine étape</h3>
            <p>
              Présenter la maquette, valider les contenus, intégrer les
              coordonnées définitives et préparer le déploiement public.
            </p>
          </div>
        </div>
      </section>

      <section id="tarifs" className="section pricing-section">
        <div className="section-heading">
          <p className="section-kicker">Adhésion</p>
          <h2>Des tarifs simples, accessibles et transparents.</h2>
        </div>

        <div className="pricing-grid">
          <article className="price-card price-primary">
            <p>Habitants d’Ablon</p>
            <strong>25€</strong>
            <span>Adhésion annuelle pour les habitants de la commune.</span>
          </article>

          <article className="price-card price-secondary">
            <p>Extérieurs</p>
            <strong>35€</strong>
            <span>Adhésion annuelle pour les personnes extérieures.</span>
          </article>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Envie de rejoindre l’ASC Ablon-sur-Seine ?</h2>
            <p>
              Une question, une inscription ou une demande d’information ?
              Contactez l’association pour découvrir les activités et les
              prochaines séances.
            </p>

            <div className="contact-checks">
              <span>
                <CheckCircle2 size={18} /> Réponse rapide
              </span>
              <span>
                <CheckCircle2 size={18} /> Activités accessibles
              </span>
              <span>
                <CheckCircle2 size={18} /> Ambiance conviviale
              </span>
            </div>
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
              Ablon-sur-Seine
            </p>
            <a
              href="mailto:contact@asc-ablon.fr"
              className="button button-primary contact-button"
            >
              Contacter l’association{" "}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src={logoSrc} alt="ASC Ablon-sur-Seine" />
        <p>© ASC Ablon-sur-Seine — Sport, nature & convivialité.</p>
      </footer>
    </main>
  );
}

export default App;
