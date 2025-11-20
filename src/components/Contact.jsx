import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="relative h-20 w-20 rounded-2xl bg-neutral-900 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.05),0_0_40px_rgba(16,185,129,0.2)]"
          >
            <div className="absolute inset-3 rounded-xl border border-neutral-700/60" />
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.25),transparent_35%)]" />
            <motion.div
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-emerald-400/80"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/40"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 bg-[#0a0f0d] overflow-hidden">
      <Loader show={loading} />

      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.15] mix-blend-soft-light grain" />
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Partner with a team that moves like light</h2>
            <p className="text-emerald-100/80 max-w-prose">Tell us about your vision. We\'ll architect a cinematic experience with modern motion, neon-green accents and pristine craft.</p>

            {/* social links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {[
                { label: 'Twitter', href: 'https://twitter.com' },
                { label: 'Instagram', href: 'https://instagram.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'YouTube', href: 'https://youtube.com' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                   className="group relative rounded-xl px-4 py-2 text-emerald-200/90 border border-emerald-400/30 bg-white/5 backdrop-blur-md hover:scale-105 transition">
                  <span className="relative z-10">{s.label}</span>
                  <span className="pointer-events-none absolute inset-0 rounded-xl bg-emerald-400/10 opacity-0 group-hover:opacity-100 transition" />
                </a>
              ))}
            </div>

            {/* email */}
            <div className="mt-8">
              <p className="text-emerald-100/80">Prefer email?</p>
              <a href="mailto:studio@eliteai.film" className="text-emerald-400 hover:text-emerald-300 transition font-semibold">studio@eliteai.film</a>
            </div>

            {/* optional calendar */}
            <div className="mt-6">
              <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-300/90 hover:text-emerald-200 transition">
                <span className="i-lucide-calendar" /> Book via Calendly
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-emerald-400/40 to-transparent blur-xl opacity-70" />
            <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-emerald-400/20 p-6 md:p-8 shadow-[0_0_0_1px_rgba(16,185,129,0.2)_inset,0_0_40px_rgba(16,185,129,0.15)]">
              {!sent ? (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-emerald-200/80 mb-2">Name</label>
                      <input required className="w-full rounded-xl bg-black/40 border border-emerald-400/20 px-4 py-3 text-white placeholder:text-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-sm text-emerald-200/80 mb-2">Email</label>
                      <input type="email" required className="w-full rounded-xl bg-black/40 border border-emerald-400/20 px-4 py-3 text-white placeholder:text-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="jane@studio.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-emerald-200/80 mb-2">Project vision</label>
                    <textarea rows={5} required className="w-full rounded-xl bg-black/40 border border-emerald-400/20 px-4 py-3 text-white placeholder:text-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Tell us about your idea..." />
                  </div>
                  <button type="submit" className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-black font-semibold">
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500" />
                    <span className="absolute -inset-[1px] rounded-xl bg-emerald-400/50 blur-lg opacity-60 group-hover:opacity-90 transition" />
                    <span className="relative">Send request</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center gap-3 rounded-full px-4 py-2 bg-white/5 backdrop-blur-md border border-emerald-400/30">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(16,185,129,0.8)]" />
                    <span className="text-emerald-300">Message received — we\'ll get back within 24 hours.</span>
                  </div>
                  <p className="mt-6 text-emerald-100/80">Want to add more? Just send another message.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-emerald-300/90 hover:text-emerald-200 transition">Send another</button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* floating WhatsApp button */}
      <a
        href="https://wa.me/1234567890" target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 group"
      >
        <span className="absolute -inset-3 rounded-full bg-emerald-400/20 blur-xl opacity-70 group-hover:opacity-100 transition pointer-events-none" />
        <div className="relative h-14 w-14 rounded-full bg-emerald-500 shadow-[0_10px_40px_rgba(16,185,129,0.4)] grid place-items-center text-black font-bold">
          WA
        </div>
      </a>
    </section>
  )
}
