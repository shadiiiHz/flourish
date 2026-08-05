import {
  Cake,
  ChefHat,
  Coffee,
  Croissant,
  CupSoda,
  Flower2,
  GlassWater,
  Leaf,
  Milk,
  Package,
  Wheat,
  type LucideIcon,
} from 'lucide-react'
import slide1 from '../assets/slider/slide1.png'
import slide2 from '../assets/slider/slide2.png'
export interface HeroSlide {
  id: number
  title: string
  desc: string
  image: string
}

export type CategoryTabId = 'bakery' | 'drinks'

export interface CategoryTab {
  id: CategoryTabId
  label: string
}

export interface Category {
  id: string
  title: string
  image: string
  icon: LucideIcon
}

export const siteConfig = {
  hero: {
    slides: [
      {
        id: 0,
        title: '',
        desc: '',
        image: slide1,
      },
      {
        id: 1,
        title: '',
        desc: '',
        image: slide2,
      },
    ] satisfies HeroSlide[],
  },
  categories: {
    tabs: [
      { id: 'drinks', label: 'نوشیدنی' },
      { id: 'bakery', label: 'نان و شیرینی' },
    ] satisfies CategoryTab[],
    items: {
      bakery: [
        { id: 'bakery', title: 'بیکری', image: '/src/assets/mainCat/bakery.png', icon: ChefHat },
        { id: 'pastry', title: 'پیستری', image: '/src/assets/mainCat/pastry.png', icon: Croissant },
        { id: 'custom', title: 'آیتم‌های سفارشی', image: '/src/assets/mainCat/order.png', icon: Cake },
        { id: 'sourdough', title: 'نان خمیر ترش', image: '/src/assets/mainCat/bread.png', icon: Wheat },
        { id: 'pantry', title: 'پینتری', image: '/src/assets/mainCat/paintry.png', icon: Package },
      ],
      drinks: [
        {
          id: 'hot-espresso',
          title: 'نوشیدنی گرم بر پایه اسپرسو',
          image: 'اسپرسو، لاته و کاپوچینوی داغ',
          icon: Coffee,
        },
        {
          id: 'cold-espresso',
          title: 'نوشیدنی سرد بر پایه اسپرسو',
          image: 'آیس لاته و آیس آمریکانو',
          icon: CupSoda,
        },
        {
          id: 'cold-drinks',
          title: 'نوشیدنی سرد',
          image: 'موکتیل و نوشیدنی‌های خنک',
          icon: GlassWater,
        },
        {
          id: 'matcha',
          title: 'ماچا',
          image: 'انواع ماچای گرم و سرد',
          icon: Leaf,
        },
        {
          id: 'flavored-hot-milk',
          title: 'شیر داغ طعم‌دار',
          image: 'شیر داغ با طعم‌های مختلف',
          icon: Milk,
        },
        {
          id: 'tea-herbal',
          title: 'چای و دمنوش',
          image: 'چای دم‌کرده و دمنوش‌های گیاهی',
          icon: Flower2,
        },
      ],
    } satisfies Record<CategoryTabId, Category[]>,
  },
}
