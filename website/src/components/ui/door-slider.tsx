import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface DoorSliderProps {
  images: string[]
}

export function DoorSlider({ images }: DoorSliderProps) {
  const [active, setActive] = useState(0)
  const startX = useRef<number | null>(null)

  if (!images.length) return null

  const total = images.length
  const previous = (active - 1 + total) % total
  const next = (active + 1) % total

  const go = (direction: number) => {
    setActive(current => (current + direction + total) % total)
  }

  return (
    <div
      className="door-slider"
      onPointerDown={event => { startX.current = event.clientX }}
      onPointerUp={event => {
        if (startX.current === null) return
        const distance = event.clientX - startX.current
        if (Math.abs(distance) > 40) go(distance < 0 ? 1 : -1)
        startX.current = null
      }}
      onPointerCancel={() => { startX.current = null }}
    >
      <div className="door-slider-track">
        <button
          className="door-panel door-panel-side door-panel-left"
          onClick={() => go(-1)}
          aria-label="Previous image"
        >
          <img src={images[previous]} alt="Previous gallery image" draggable={false} />
        </button>

        <div className="door-main-slot">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              className="door-panel door-panel-main"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
            >
              <img src={images[active]} alt={`TuneStream gallery image ${active + 1}`} draggable={false} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="door-panel door-panel-side door-panel-right"
          onClick={() => go(1)}
          aria-label="Next image"
        >
          <img src={images[next]} alt="Next gallery image" draggable={false} />
        </button>
      </div>

      <div className="door-slider-controls">
        <button onClick={() => go(-1)} aria-label="Previous image">←</button>
        <span>{String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <button onClick={() => go(1)} aria-label="Next image">→</button>
      </div>
    </div>
  )
}
