import './App.css'
import avatar from './assets/profile.png'
import { NavBar } from './components/NavBar'

type TimelineItem = {
  title: string
  org: string
  period: string
  location?: string
  bullets: string[]
}

type Project = {
  name: string
  description: string
  stack: string
  link?: string
}

type Post = {
  title: string
  summary: string
  link?: string
}

const experiences: TimelineItem[] = [
  {
    title: 'Stage Sonatrach – Division Production',
    org: 'Sonatrach-Prémere Compagnie Pétrolière d’Afrique',
    period: 'Juillet 2025 – Août 2025',
    location: 'Hydra, Alger',
    bullets: [
      'Optimisation d’un système d’information interne et modélisation de la base de données',
      'Renforcement des compétences en programmation et gestion de projet dans un contexte industriel',
    ],
  },
  {
    title: 'Projet hospitalier – Prédiction de l’âge osseux pédiatrique',
    org: 'Hôpital Ibn Ziri Bologhine',
    period: 'Février 2025 – Juin 2025',
    bullets: [
      'Application de deep learning (TensorFlow, Keras) pour estimer l’âge osseux',
      'Versions mobile et desktop pour une compatibilité Android et Windows',
      'Optimisation du parcours clinique avec les médecins et amélioration UX',
    ],
  },
  {
    title: 'Leadership et engagement universitaire',
    org: 'USTHB & ESI Alger',
    period: 'Octobre 2024 – Présent',
    bullets: [
      'Leader Open Mind Club : évènements académiques, bootcamps et hackathons',
      'Lauréat de l’Ideathon, mise en avant des compétences d’innovation et de résolution de problèmes',
      'Membre actif de la School of AI Alger pour la vulgarisation de l’IA',
    ],
  },
]

const education: TimelineItem[] = [
  {
    title: 'Master Informatique Visuelle (Computer Vision)',
    org: 'USTHB Bab Ezzouar, Alger',
    period: '2025 – en cours',
    bullets: ['Recherche et prototypage en vision par ordinateur et deep learning'],
  },
  {
    title: 'Licence Ingénierie des Systèmes d’Information et du Logiciel',
    org: 'USTHB Bab Ezzouar, Alger',
    period: '2022 – 2025',
    bullets: ['Parcours SI orienté data, bases de données et développement full stack'],
  },
  {
    title: 'Baccalauréat Scientifique (Mention Bien)',
    org: 'Lycée Idrissi Alger',
    period: '2021 – 2022',
    bullets: ['Approfondissement en mathématiques et sciences physiques'],
  },
]

const projects: Project[] = [
  {
    name: 'Hackathon Smart DZ – Les Caravanes du Futur',
    description:
      'Plateforme de gestion pour la restauration avec approche RAG pour digitaliser et optimiser les services.',
    stack: 'React, Django, RAG, Bases de données',
    link: 'https://github.com/coding-with-lounas',
  },
  {
    name: 'Junction X Algérie Hackathon',
    description:
      'Monitoring et prédiction pour l’aquaculture : surveillance en temps réel et alertes.',
    stack: 'React, Next.js, Data Viz',
    link: 'https://github.com/coding-with-lounas',
  },
  {
    name: 'Gestion des ressources humaines',
    description:
      'Système d’information RH pour entreprise incluant tableaux de bord et formulaires sécurisés.',
    stack: 'Django, CMS, Bootstrap',
    link: 'https://github.com/coding-with-lounas',
  },
]

const posts: Post[] = [
  {
    title: 'Bootstraper un projet Computer Vision orienté production',
    summary: 'Pipeline clair, datasets reproductibles, suivi expérimental et déploiement léger sur GPU partagé.',
  },
  {
    title: 'Résoudre des puzzles avec A* et BFS en Python',
    summary: 'Retour sur le projet Rush Hour : heuristiques, visualisation des états et optimisation mémoire.',
  },
  {
    title: 'RAG appliqué aux opérations de restauration',
    summary: 'Comment combiner retrieval-augmented generation et workflows métiers pour réduire les délais service.',
  },
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lounas-idjourdikene/' },
  { label: 'GitHub', href: 'https://github.com/coding-with-lounas' },
  { label: 'Kaggle', href: 'https://www.kaggle.com/lounasidj' },
]

function App() {
  return (
    <main className="page " id="top">
      <NavBar
        items={[
          { id: 'skills', label: 'Skills' },
          { id: 'experience', label: 'Experience' },
          { id: 'projects', label: 'Projects' },
          { id: 'education', label: 'Education' },
          { id: 'blog', label: 'Blog' },
        ]}
      />
      <div className="bg-accent" aria-hidden />

      <header className="hero">
        <div>
          <h1>Lounas IDJOURDIKENE</h1>
          <p className="eyebrow">AI Engineer | Full Stack Developer</p>

          {/* <p className="lede">
            Passionate Software Engineer with 3 years of hands-on experience in full-stack AI development, with strong expertise in training, fine-tuning, and deploying LLM-based applications.
          </p> */}
          <div className="actions">
            <a className="button primary" href="mailto:ijdouridenelounas@gmail.com">
              Me contacter
            </a>
            <div className="chip-row" aria-label="Réseaux sociaux">
              {socials.map((social) => (
                <a key={social.label} className="chip" href={social.href} target="_blank">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div className="meta">
            <span>Python, JS/TS, Django, React</span>
            <span>Français, Anglais, Arabe</span>
          </div>
        </div>
        <div>
          <div className="avatar-wrap">
            {/* Place your image at public/profile.jpg */}
            <img className="avatar" src={avatar} alt="Photo de profil" />
          </div>
          <div className="card contact">
          <p className="eyebrow">Coordonnées</p>  
          <div className="contact-row">
            <span>Localisation</span>
            <span>Alger centre</span>
          </div>
          </div>
        </div>
      </header>

      <section className="section" id="skills">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>Technologies and tools I work with</p>
        </div>
        <div className="grid gap-4">
          <div className="card skill-category">
            <div className="skill-header">
              <div className="skill-icon bg-gradient-to-br from-blue-400 to-blue-600">
                <span className="text-white text-xl">{'</>'}</span>
              </div>
              <h3>Programming Languages & LLMs</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag blue">Python (Advanced)</span>
              <span className="skill-tag blue">TypeScript/JavaScript</span>
              <span className="skill-tag blue">SQL</span>
              <span className="skill-tag blue">C++</span>
              <span className="skill-tag blue">GPT-4</span>
              <span className="skill-tag blue">Gemini 2.5</span>
              <span className="skill-tag blue">DALL-E</span>
              <span className="skill-tag blue">Claude</span>
              <span className="skill-tag blue">Hugging Face Transformers</span>
            </div>
          </div>

          <div className="card skill-category">
            <div className="skill-header">
              <div className="skill-icon bg-gradient-to-br from-green-400 to-green-600">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3>AI/ML & Prompt Engineering</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag green">PyTorch</span>
              <span className="skill-tag green">TensorFlow</span>
              <span className="skill-tag green">NumPy</span>
              <span className="skill-tag green">Pandas</span>
              <span className="skill-tag green">scikit-learn</span>
              <span className="skill-tag green">LangChain</span>
              <span className="skill-tag green">Transformers</span>
              <span className="skill-tag green">Prompt chaining</span>
              <span className="skill-tag green">Prompt tuning</span>
              <span className="skill-tag green">System messages</span>
              <span className="skill-tag green">Few-shot learning</span>
              <span className="skill-tag green">NLP</span>
              <span className="skill-tag green">Model fine-tuning</span>
              <span className="skill-tag green">Text generation</span>
              <span className="skill-tag green">Sentiment analysis</span>
            </div>
          </div>

          <div className="card skill-category">
            <div className="skill-header">
              <div className="skill-icon bg-gradient-to-br from-purple-400 to-purple-600">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <h3>Frameworks & Cloud/DevOps</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag purple">FastAPI</span>
              <span className="skill-tag purple">Django</span>
              <span className="skill-tag purple">Flask</span>
              <span className="skill-tag purple">React.js</span>
              <span className="skill-tag purple">Next.js</span>
              <span className="skill-tag purple">Node.js</span>
              <span className="skill-tag purple">Express.js</span>
              <span className="skill-tag purple">PostgreSQL</span>
              <span className="skill-tag purple">MongoDB</span>
              <span className="skill-tag purple">Google Cloud Platform</span>
              <span className="skill-tag purple">Docker</span>
              <span className="skill-tag purple">Git</span>
              <span className="skill-tag purple">MLOps pipelines</span>
              <span className="skill-tag purple">Model deployment</span>
            </div>
          </div>

          <div className="card skill-category">
            <div className="skill-header">
              <div className="skill-icon bg-gradient-to-br from-orange-400 to-orange-600">
                <span className="text-white text-xl">🛠️</span>
              </div>
              <h3>Tools</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag orange">Jupyter</span>
              <span className="skill-tag orange">VS Code</span>
              <span className="skill-tag orange">Postman</span>
              <span className="skill-tag orange">Google Colab</span>
              <span className="skill-tag orange">Hugging Face</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-header">
          <h2>Expériences professionnelles</h2>
          <p>IA appliquée, data et développement produit.</p>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article key={item.title} className="card timeline-card">
              <div className="timeline-badge" aria-hidden />
              <div className="timeline-meta">
                <p className="eyebrow">{item.period}</p>
                <p className="org">{item.org}</p>
                {item.location && <p className="location">{item.location}</p>}
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <div className="section-header">
          <h2>Diplômes et formations</h2>
          <p>Un parcours orienté vision par ordinateur et systèmes d’information.</p>
        </div>
        <div className="timeline">
          {education.map((item) => (
            <article key={item.title} className="card timeline-card">
              <div className="timeline-badge" aria-hidden />
              <div className="timeline-meta">
                <p className="eyebrow">{item.period}</p>
                <p className="org">{item.org}</p>
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-header">
          <h2>Projets personnels</h2>
          <p>Des prototypes axés produit, data et expérience utilisateur.</p>
        </div>
        <div className="grid">
          {projects.map((project) => {
            const card = (
              <article key={project.name} className="card project-card hover:shadow-md transition-shadow">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="tagline">{project.stack}</p>
                {project.link && (
                  <span className="chip mt-1 inline-block">Ouvrir le projet</span>
                )}
              </article>
            )
            return project.link ? (
              <a key={project.name} href={project.link} target="_blank" rel="noopener noreferrer" className="no-underline">
                {card}
              </a>
            ) : (
              card
            )
          })}
        </div>
      </section>

      <section className="section" id="blog">
        <div className="section-header">
          <h2>Blog et notes</h2>
          <p>Quelques idées courtes sur l’IA appliquée, les algorithmes et le produit.</p>
        </div>
        <div className="grid posts">
          {posts.map((post) => (
            <article key={post.title} className="card post-card">
              <p className="eyebrow">Post</p>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              {post.link && (
                <a className="chip" href={post.link} target="_blank">
                  Lire
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
