import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0a0f0d]">
      {/* Grain + vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.15] mix-blend-soft-light grain" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(16,185,129,0.35),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.2),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_120%,rgba(0,0,0,0.85),transparent)]" />
      </div>

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/5 backdrop-blur-md border border-emerald-400/20 shadow-[0_0_0_1px_rgba(16,185,129,0.25)_inset,0_0_30px_rgba(16,185,129,0.15)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(16,185,129,0.8)]" />
              <span className="text-emerald-300/90 text-sm tracking-wide">Elite AI Video Studio</span>
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05] text-white drop-shadow-[0_10px_40px_rgba(16,185,129,0.15)]">
              Let\'s Create Something Powerful
            </h1>

            <p className="mt-6 text-lg md:text-xl text-emerald-100/80 max-w-2xl">
              Premium, cinematic, and engineered to impress. We craft bold experiences with glassmorphism layers, neon gradients, and precise motion.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-black font-semibold">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500" />
                <span className="absolute -inset-[1px] rounded-xl bg-emerald-400/50 blur-lg opacity-60 group-hover:opacity-90 transition" />
                <span className="relative">Start a Project</span>
              </a>

              <a
                href="https://calendly.com/" target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-emerald-400/30 text-emerald-200/90 bg-white/5 backdrop-blur-md hover:scale-105 transition will-change-transform"
              >
                <span className="i-lucide-calendar" />
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom gradient stroke */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
    </section>
  )
}

export default Hero
