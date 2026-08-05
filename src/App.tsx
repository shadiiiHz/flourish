import Header from './components/Header'
import Categories from './components/Categories'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-svh overflow-x-clip bg-cream text-cocoa-900">
      <Header />
      <main>
        <Hero />
        <Categories />
      </main>
    </div>
  )
}

export default App
