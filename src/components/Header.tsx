import { motion } from "framer-motion";
import basket from "../assets/basketShopping.svg";
import logo from "../assets/logo.png";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/40 bg-white/40 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),0_10px_30px_-12px_rgba(138,84,39,0.25)] backdrop-blur-2xl backdrop-saturate-150 sm:px-5 sm:py-3">
        {/* Logo — right side in RTL */}
        <div className="shrink-0 flex items-center justify-center overflow-hidden rounded-full ring-1 ring-sand-100 sm:h-14 sm:w-14">
          <img
            src={logo}
            alt="لوگوی فلوریش"
            className="h-10 w-10 object-cover"
          />
        </div>

        {/* Actions — left side in RTL */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center overflow-hidden">
            <button className="text-sm font-medium text-sand-500 transition-colors hover:bg-white/10 sm:px-2 sm:text-base">
              ورود
            </button>
            <span className="h-4 w-px bg-cocoa-700" />
            <button className="text-sm font-bold text-sand-500 transition-colors hover:bg-white/10 sm:px-2 sm:text-base">
              ثبت‌نام
            </button>
          </div>

          <button
            aria-label="سبد خرید"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center text-cocoa-900 sm:h-11 sm:w-11"
          >
            <img
              src={basket}
              alt=""
              className="h-25 w-25 object-cover rounded-full bg-transparent"
            />
            <span className="absolute -top-0.5 -end-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-sand-500 px-1 text-[10px] font-bold text-white ring-2 ring-white">
              2
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
