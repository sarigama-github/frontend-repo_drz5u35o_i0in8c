import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App(){
  return (
    <div className="min-h-screen bg-[#070b09] text-white">
      {/* global grain texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.12] grain" />

      {/* neon border container */}
      <div className="relative">
        <Hero />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
