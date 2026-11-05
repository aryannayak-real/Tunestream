import { motion, useReducedMotion } from 'framer-motion'
import { AudioWaveform, Users, Sparkles } from 'lucide-react'

const updates = [
  {
    number: '01',
    icon: AudioWaveform,
    title: 'A clearer identity.',
    description: 'TuneStream branding refined across the app, creating a more consistent experience.',
    tag: 'BRAND & EXPERIENCE',
  },
  {
    number: '02',
    icon: Users,
    title: 'Closer to the community.',
    description: 'Updated community and support links, making it easier to connect with TuneStream.',
    tag: 'COMMUNITY',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Details, refined.',
    description: 'Updated About, updater, modules and audio-related labels for a more cohesive app.',
    tag: 'POLISH & IMPROVEMENTS',
  },
]

export default function WhatsNew() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="whats-new-section" id="whats-new">
      <motion.div
        className="whats-new-heading"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">ALWAYS MOVING FORWARD</p>
        <h2>What's <span>new.</span></h2>
        <p>A look at what's changed in the latest TuneStream release.</p>
      </motion.div>

      <div className="release-timeline">
        <div className="timeline-line" />
        <div className="timeline-version">
          <span className="timeline-version-dot" />
          <span>VERSION 8.3.4</span>
          <span className="timeline-build">BUILD 1228</span>
        </div>

        {updates.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.article
              className="timeline-item"
              key={item.number}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: reduceMotion ? 0 : index * 0.13,
              }}
            >
              <div className="timeline-marker">{item.number}</div>
              <div className="timeline-icon"><Icon size={22} strokeWidth={1.4} /></div>
              <div className="timeline-copy">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className="timeline-arrow">↗</span>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
