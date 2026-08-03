import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Lenis from 'lenis'
import { Rocket } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)
  const boxRef = useRef<HTMLDivElement>(null)

  // Smooth scrolling via Lenis
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Simple GSAP animation on mount
  useEffect(() => {
    if (boxRef.current) {
      gsap.from(boxRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
      })
    }
  }, [])

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <motion.div
        ref={boxRef}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-neutral-200 p-10 shadow-sm dark:border-neutral-800"
      >
        <Rocket className="h-10 w-10 text-purple-500" />
        <h1 className="text-3xl font-medium tracking-tight">Trus</h1>
        <p className="text-neutral-500">
          Vite + React + Tailwind + Framer Motion + GSAP + Lenis
        </p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg bg-purple-500 px-4 py-2 text-white transition hover:bg-purple-600"
        >
          count is {count}
        </button>
      </motion.div>
    </main>
  )
}

export default App
