import { motion, useReducedMotion } from 'framer-motion'
import { AudioWaveform, Heart, MoreHorizontal, Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import { useState } from 'react'

export default function PlayerPreview() {
  const [playing, setPlaying] = useState(true)
  const reduceMotion = useReducedMotion()

  return (
    <section className="player-preview-section">
      <div className="player-preview-copy">
        <p className="eyebrow">A CLOSER LISTEN</p>
        <h2>Every moment.<br /><span>In its own rhythm.</span></h2>
        <p>A glimpse of a listening experience designed to keep the music in focus.</p>
      </div>

      <motion.div
        className="preview-player"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 35, rotateX: 7 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="preview-player-top">
          <span><AudioWaveform size={15} /> NOW PLAYING</span>
          <MoreHorizontal size={19} />
        </div>

        <div className="preview-artwork">
          <div className="preview-art-glow" />
          <div className="preview-art-rings">
            <div />
            <div />
            <div />
          </div>
          <AudioWaveform size={65} strokeWidth={0.8} />
          <span>TS — 001</span>
        </div>

        <div className="preview-track">
          <div>
            <h3>Midnight in Motion</h3>
            <p>TuneStream Sessions</p>
          </div>
          <Heart size={19} strokeWidth={1.5} />
        </div>

        <div className="preview-progress">
          <div className="preview-progress-track"><span /></div>
          <div className="preview-time"><span>1:24</span><span>3:48</span></div>
        </div>

        <div className="preview-controls">
          <SkipBack size={22} />
          <button
            type="button"
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? 'Pause visual preview' : 'Play visual preview'}
          >
            {playing ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </button>
          <SkipForward size={22} />
        </div>

        <div className="preview-volume">
          <Volume2 size={15} />
          <div><span /></div>
          <span>72%</span>
        </div>
      </motion.div>
    </section>
  )
}
