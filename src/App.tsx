import Header from './components/Header'
import Categories from './components/Categories'
import Hero from './components/Hero'
import logo from './assets/logo.png'
import NewItems from './components/NewItems'

function App() {
  return (
    <div className="relative min-h-svh overflow-x-clip bg-cream text-cocoa-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Categories />
          <NewItems />
        </main>
      </div>
    </div>
  )
}

export default App
