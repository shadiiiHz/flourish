import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, type CategoryTabId } from "../config/siteConfig";

const { tabs, items: categoriesByTab } = siteConfig.categories;

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function Categories() {
  const [activeTab, setActiveTab] = useState<CategoryTabId>("bakery");
  const categories = categoriesByTab[activeTab];

  return (
    <section className="relative px-3 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex justify-center sm:mb-14">
          <div className="relative flex items-center gap-1 rounded-full border border-white/40 bg-white/40 p-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),0_10px_30px_-12px_rgba(138,84,39,0.25)] backdrop-blur-2xl backdrop-saturate-150">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className="relative rounded-full px-5 py-2.5 text-xs font-bold transition-colors sm:px-8 sm:text-sm"
              >
                {activeTab === id && (
                  <motion.span
                    layoutId="category-tab-highlight"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white/70 shadow-[0_8px_20px_-8px_rgba(138,84,39,0.45)]"
                  />
                )}
                <span
                  className={`relative z-10 ${activeTab === id ? "text-cocoa-900" : "text-cocoa-500"}`}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1"
        >
          {categories.map(({ id, title, image }) => (
            <motion.button
              key={id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex flex-col items-center gap-4 rounded-[1.75rem] border border-sand-100 bg-white p-6 text-center shadow-[0_16px_40px_-24px_rgba(138,84,39,0.35)] transition-colors hover:border-sand-200 hover:bg-sand-50/20 sm:rounded-[2rem] sm:p-7"
            >
              <img
                src={image}
                alt=""
                className="h-40 w-40 object-cover rounded-full bg-transparent"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-sm font-bold text-cocoa-900 sm:text-base">
                  {title}
                </h3>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Categories;
