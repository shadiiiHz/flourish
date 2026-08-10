import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import logo from './assets/logo.png'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'
import CartDrawer from './components/CartDrawer'
import CartToast from './components/CartToast'
import AuthModal from './components/AuthModal'
import AuthToast from './components/AuthToast'
import { CartProvider, useCart } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import CategoryMenuPage from './pages/CategoryMenuPage'
import ProfilePage from './pages/ProfilePage'

function CartOverlay() {
  const { isOpen } = useCart()
  return (
    <>
      <AnimatePresence>{isOpen && <CartDrawer />}</AnimatePresence>
      <CartToast />
    </>
  )
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
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
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<CategoryMenuPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <GoToTop />
            <CartOverlay />
            <AuthModal />
            <AuthToast />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
