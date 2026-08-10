import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import basket from "../assets/basketShopping.svg";
import logo from "../assets/textLogo.png";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { totalCount, openCart } = useCart();
  const { isAuthenticated, openAuth } = useAuth();

  return (
    <motion.header
      id="site-header"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/40 bg-white/40 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),0_10px_30px_-12px_rgba(138,84,39,0.25)] backdrop-blur-2xl backdrop-saturate-150 sm:px-6 sm:py-3">
        {/* Logo + nav — right side in RTL */}
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 w-10 shrink-0 items-center justify-center self-center overflow-hidden sm:h-14 sm:w-14"
          >
            <img
              src={logo}
              alt="لوگوی فلوریش"
              className="h-full w-full object-contain object-center"
            />
          </Link>

          {/* <nav className="flex items-center">
            <Link
              to="/menu"
              className="text-sm font-bold text-sand-500 transition-colors hover:text-sand-500 sm:text-base"
            >
              منو
            </Link>
          </nav> */}
        </div>

        {/* Actions — left side in RTL */}
        <div className="flex items-center gap-2 sm:gap-4">
          {isAuthenticated ? (
            <Link
              to="/profile"
              aria-label="پروفایل کاربری"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand-50 text-sand-500 transition hover:bg-sand-100 sm:h-11 sm:w-11"
            >
              <User className="h-5 w-5" />
            </Link>
          ) : (
            <div className="flex items-center gap-1.5 overflow-hidden sm:gap-1">
              <button
                type="button"
                onClick={() => openAuth()}
                className="text-sm font-medium text-sand-500 transition-colors hover:bg-white/10 sm:px-1 sm:text-base"
              >
                ورود
              </button>
              <span className="h-4 w-px bg-cocoa-700" />
              <button
                type="button"
                onClick={() => openAuth()}
                className="text-sm font-bold text-sand-500 transition-colors hover:bg-white/10 sm:px-1 sm:text-base"
              >
                ثبت‌نام
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={openCart}
            aria-label="سبد خرید"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center text-cocoa-900 sm:h-11 sm:w-11"
          >
            <img
              src={basket}
              alt=""
              className="h-25 w-25 object-cover rounded-full bg-transparent"
            />
            {totalCount > 0 && (
              <span className="absolute -top-0.5 -end-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-sand-500 px-1 text-[10px] font-bold text-white ring-2 ring-white">
                {totalCount.toLocaleString("fa-IR")}
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
