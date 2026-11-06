import { DoorSlider } from './components/ui/door-slider'
import PlayerPreview from './components/PlayerPreview'
import FAQ from './components/FAQ'
import WhatsNew from './components/WhatsNew'
import Showcase from './components/Showcase'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  AudioWaveform,
  Disc3,
  Headphones,
  Menu,
  SlidersHorizontal,
  X,
} from 'lucide-react'

const features = [
  {
    number: '01',
    icon: Headphones,
    title: 'Made for listening.',
    description:
      'A music experience designed to keep the focus where it belongs — on the music.',
  },
  {
    number: '02',
    icon: SlidersHorizontal,
    title: 'Make it yours.',
    description:
      'Explore sound and personalization options to shape an experience that feels like your own.',
  },
  {
    number: '03',
    icon: AudioWaveform,
    title: 'Every detail matters.',
    description:
      'From the interface to the listening experience, TuneStream is built with care.',
  },
]


const galleryImages = [
  import.meta.env.BASE_URL + `gallery/1793942287614.png`,
  import.meta.env.BASE_URL + `gallery/1793942318378.png`,
  import.meta.env.BASE_URL + `gallery/1793942337413.png`,
  import.meta.env.BASE_URL + `gallery/1793942354034.png`,
  import.meta.env.BASE_URL + `gallery/1793942371725.png`,
  import.meta.env.BASE_URL + `gallery/1793942395684.png`,
  import.meta.env.BASE_URL + `gallery/1793942417635.png`,
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  }

  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#" aria-label="TuneStream home">
          <span className="brand-mark"><AudioWaveform size={19} /></span>
          TuneStream<span className="brand-period">.</span>
        </a>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#download" onClick={() => setMenuOpen(false)}>Download</a>
        </nav>

        <a className="nav-cta" href="https://github.com/aryannayak-real/Tunestream/releases/latest">
          Get TuneStream <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <span className="eyebrow-line" />
            A MUSIC EXPERIENCE, REIMAGINED
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.12 }}
          >
            Hear more.
            <br />
            <span>Feel everything.</span>
          </motion.h1>

          <motion.div
            className="hero-bottom"
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.25 }}
          >
            <p>
              Your music deserves more than an ordinary player.
              Discover TuneStream.
            </p>
            <a href="#experience" className="round-link" aria-label="Explore TuneStream">
              <ArrowDownRight size={21} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="sound-art"
          initial={{ opacity: 0, scale: 0.86, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          aria-label="Abstract animated sound sculpture"
          role="img"
        >
          <div className="art-glow" />
          <div className="art-ring ring-one" />
          <div className="art-ring ring-two" />
          <div className="art-ring ring-three" />
          <div className="art-core">
            <div className="art-core-content">
              <Disc3 size={58} strokeWidth={0.65} />
              <div className="art-equalizer" aria-hidden="true">
                <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
              </div>
            </div>
          </div>
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <span className="art-label">SOUND IN MOTION</span>
        </motion.div>

        <div className="hero-index">
          <span>01 / 03</span>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>


      <section className="gallery-section" aria-label="TuneStream visual gallery">
        <div className="gallery-heading">
          <p className="eyebrow">A DIFFERENT WAY TO EXPERIENCE MUSIC</p>
          <h2>Music looks better<br /><span>in motion.</span></h2>
          <p>Take a closer look. Drag, explore and discover TuneStream.</p>
        </div>
        <div className="gallery-stage">
          <DoorSlider images={galleryImages} />
        </div>
        <p className="gallery-hint"><span /> DRAG TO EXPLORE <span /></p>
      </section>

      <section className="statement" id="experience">
        <motion.div
          className="statement-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
        >
          <p className="eyebrow">THE TUNESTREAM EXPERIENCE</p>
          <h2>
            Not just another
            <br />
            <span>music player.</span>
          </h2>
          <p className="statement-description">
            A considered space for your music. Thoughtful design,
            useful controls and room to make the experience your own.
          </p>
        </motion.div>
      </section>

      <PlayerPreview />

      <Showcase />

      <section className="features-section" id="features">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BUILT AROUND THE MUSIC</p>
            <h2>Details make<br /><span>the difference.</span></h2>
          </div>
          <p className="section-aside">
            A closer look at what makes the TuneStream experience.
          </p>
        </div>

        <div className="feature-list">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.article
                className="feature-row"
                key={feature.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
              >
                <span className="feature-number">{feature.number}</span>
                <div className="feature-icon"><Icon size={25} strokeWidth={1.4} /></div>
                <div className="feature-copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <ArrowUpRight className="feature-arrow" size={22} />
              </motion.article>
            )
          })}
        </div>
      </section>

      <WhatsNew />

      <section className="download-section" id="download">
        <motion.div
          className="download-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
        >
          <p className="eyebrow">THE LATEST RELEASE</p>
          <div className="release-version">
            <span className="release-live-dot" />
            VERSION 8.3.4
            <span className="release-build">BUILD 1228</span>
          </div>
          <h2>Press play.<br /><span>Find your flow.</span></h2>
          <p className="download-description">
            Your music deserves a better home. Download TuneStream and make every listen yours.
          </p>

          <div className="download-actions">
            <a
              className="download-button"
              href="https://github.com/aryannayak-real/Tunestream/releases/download/v8.3.4-build1228/TuneStream.apk"
            >
              Download for Android <ArrowUpRight size={18} />
            </a>
            <a
              className="release-notes-link"
              href="https://github.com/aryannayak-real/Tunestream/releases/tag/v8.3.4-build1228"
              target="_blank"
              rel="noreferrer"
            >
              View release notes <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="download-specs">
            <div><span>PLATFORM</span><strong>Android</strong></div>
            <div><span>REQUIREMENT</span><strong>Android 7.0+</strong></div>
            <div><span>PACKAGE</span><strong>Universal APK</strong></div>
          </div>
        </motion.div>

        <div className="download-decoration" aria-hidden="true">
          <div className="decoration-ring" />
          <div className="decoration-ring ring-b" />
          <div className="decoration-ring ring-c" />
          <div className="download-orb"><AudioWaveform size={58} strokeWidth={0.8} /></div>
        </div>
      </section>

      <FAQ />

      <footer className="footer">
        <a className="brand" href="#">
          <span className="brand-mark"><AudioWaveform size={18} /></span>
          TuneStream<span className="brand-period">.</span>
        </a>
        <p>Made for the love of music.</p>
        <div className="footer-links">
          <a href="https://github.com/aryannayak-real/Tunestream" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
          <a href="https://discord.gg/apzYwfw3xs" target="_blank" rel="noreferrer">Community <ArrowUpRight size={13} /></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} TuneStream</span>
      </footer>
    </main>
  )
}
