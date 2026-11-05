import { motion, useReducedMotion } from 'framer-motion'

const screens = [
  { image: import.meta.env.BASE_URL + 'screenshots/library.jpg', title: 'Your music. Your space.', label: 'THE HOME EXPERIENCE', className: 'showcase-phone-left' },
  { image: import.meta.env.BASE_URL + 'screenshots/player.jpg', title: 'Every beat, in focus.', label: 'THE PLAYER', className: 'showcase-phone-center' },
  { image: import.meta.env.BASE_URL + 'screenshots/home.jpg', title: 'Everything in its place.', label: 'YOUR LIBRARY', className: 'showcase-phone-right' },
]

export default function Showcase() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="showcase-section" aria-label="TuneStream app showcase">
      <motion.div
        className="showcase-heading"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">A CLOSER LOOK</p>
        <h2>Designed to be<br /><span>experienced.</span></h2>
        <p>Every screen has a purpose. Every detail has a place.</p>
      </motion.div>

      <div className="showcase-stage">
        {screens.map((screen, index) => (
          <motion.div
            key={screen.image}
            className={`showcase-phone ${screen.className}`}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : index * 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="showcase-phone-frame">
              <div className="showcase-phone-screen">
                <img src={screen.image} alt={screen.title} loading="lazy" />
              </div>
            </div>
            <div className="showcase-phone-caption">
              <span>{screen.label}</span>
              <p>{screen.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
