import Header from './components/Header'
import Categories from './components/Categories'
import Hero from './components/Hero'
import logo from './assets/logo-placeholder.png'

function App() {
  return (
    <div className="relative min-h-svh overflow-x-clip bg-cream text-cocoa-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '160px 160px',
        }}
      />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Categories />
        </main>
      </div>
    </div>
  )
}

export default App
