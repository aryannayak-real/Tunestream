import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'

const questions = [
  {
    question: 'How do I install TuneStream?',
    answer: 'Download the Universal APK using the download button above. Open the downloaded file on your Android device and follow the installation instructions.',
  },
  {
    question: 'Which Android versions are supported?',
    answer: 'TuneStream supports Android 7.0 and newer devices.',
  },
  {
    question: 'How do I get the latest version?',
    answer: 'Visit the Download section or our GitHub Releases page to find the latest available version and its release notes.',
  },
  {
    question: 'Can I customize my listening experience?',
    answer: 'TuneStream includes listening, sound and personalization options. Explore the settings inside the app to discover the available controls.',
  },
  {
    question: 'Where can I get help or report an issue?',
    answer: 'Join our Discord community for support and discussions, or visit the TuneStream GitHub repository to report an issue.',
  },
]

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0)
  const reduceMotion = useReducedMotion()

  return (
    <section className="faq-section" id="faq">
      <motion.div
        className="faq-heading"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">GOOD TO KNOW</p>
        <h2>Questions, <span>answered.</span></h2>
        <p>A few things you might want to know before pressing play.</p>
      </motion.div>

      <div className="faq-list">
        {questions.map((item, index) => {
          const open = active === index
          return (
            <div className={`faq-item ${open ? 'faq-item-open' : ''}`} key={item.question}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={open}
                onClick={() => setActive(open ? null : index)}
              >
                <span className="faq-number">0{index + 1}</span>
                <span className="faq-question-text">{item.question}</span>
                <motion.span
                  className="faq-toggle"
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Plus size={19} strokeWidth={1.4} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    className="faq-answer"
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.3 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
