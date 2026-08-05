import { motion } from 'framer-motion'
import { Cake, ChefHat, Croissant, Package, Wheat, type LucideIcon } from 'lucide-react'

interface Category {
  id: string
  title: string
  tagline: string
  icon: LucideIcon
}

const categories: Category[] = [
  { id: 'bakery', title: 'بیکری', tagline: 'نان و محصولات پخت روز', icon: ChefHat },
  { id: 'pastry', title: 'پیستری', tagline: 'کروسان، دانمارکی و بیشتر', icon: Croissant },
  { id: 'custom', title: 'آیتم‌های سفارشی', tagline: 'طراحی و سفارش اختصاصی', icon: Cake },
  { id: 'sourdough', title: 'نان خمیر ترش', tagline: 'با خمیرمایه طبیعی', icon: Wheat },
  { id: 'pantry', title: 'پینتری', tagline: 'مواد اولیه و بسته‌های خانگی', icon: Package },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

function Categories() {
  return (
    <section className="relative px-3 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-center gap-3 text-center sm:mb-14">
          <span className="rounded-full bg-sand-100 px-4 py-1.5 text-xs font-bold text-sand-500 sm:text-sm">
            دسته‌بندی‌ها
          </span>
          <h2 className="font-display text-2xl font-extrabold text-cocoa-900 sm:text-4xl">
            دسته‌بندی محصولات
          </h2>
          <p className="max-w-lg text-sm text-cocoa-500 sm:text-base">
            از نان‌های تازه تا کیک‌های اختصاصی، هر چیزی که برای یک خانه شیرین لازم دارید.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1"
        >
          {categories.map(({ id, title, tagline, icon: Icon }) => (
            <motion.button
              key={id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex flex-col items-center gap-4 rounded-[1.75rem] border border-sand-100 bg-white p-6 text-center shadow-[0_16px_40px_-24px_rgba(138,84,39,0.35)] transition-colors hover:border-sand-200 hover:bg-sand-50 sm:rounded-[2rem] sm:p-7"
            >
              <span className="blob flex h-16 w-16 items-center justify-center bg-gradient-to-br from-sand-100 to-sand-300 text-cocoa-700 transition-transform duration-300 group-hover:rotate-6 sm:h-[4.5rem] sm:w-[4.5rem]">
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.9} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-sm font-bold text-cocoa-900 sm:text-base">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-cocoa-500 sm:text-sm">{tagline}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Categories
