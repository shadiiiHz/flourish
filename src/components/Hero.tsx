import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { siteConfig } from '../config/siteConfig'

const slides = siteConfig.hero.slides
const AUTOPLAY_MS = 4500

function Hero() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [isPaused])

  const slide = slides[index]

  return (
    <section className="relative px-3 pt-8 sm:px-6 sm:pt-12">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-sand-100 shadow-[0_30px_60px_-25px_rgba(138,84,39,0.35)] sm:rounded-[3rem]"
      >
        <div className="relative h-[300px] sm:h-[420px] md:h-[600px]">
          <AnimatePresence>
            <motion.img
              key={slide.id}
              src={slide.image}
              alt={slide.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              key={`${slide.id}-overlay`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-black/15 to-black/70"
            >
              <div className="flex h-full flex-col items-end justify-center gap-2 px-6 text-right sm:gap-3 sm:px-12 md:px-16">
                <h2 className="max-w-sm text-balance font-display text-xl font-extrabold leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:max-w-md sm:text-2xl md:text-3xl">
                  {slide.title}
                </h2>
                <p className="max-w-xs text-balance text-sm leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:max-w-sm sm:text-base">
                  {slide.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* dots */}
        <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-2 sm:bottom-7">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`رفتن به تصویر ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-7 bg-white' : 'w-2 bg-white/60 hover:bg-white/85'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
