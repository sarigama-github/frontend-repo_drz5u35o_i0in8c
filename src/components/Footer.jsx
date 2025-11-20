function Footer(){
  return (
    <footer className="relative bg-[#0a0f0d] py-10 border-t border-emerald-400/20">
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-soft-light grain" />
      <div className="relative container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-emerald-100/70">© {new Date().getFullYear()} Elite AI Studio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="text-emerald-300/80 hover:text-emerald-200 transition" href="#">Privacy</a>
          <a className="text-emerald-300/80 hover:text-emerald-200 transition" href="#">Terms</a>
          <a className="text-emerald-300/80 hover:text-emerald-200 transition" href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
