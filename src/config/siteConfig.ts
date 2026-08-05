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
import bakeryImg from '../assets/mainCat/bakery.png'
import pastryImg from '../assets/mainCat/pastry.png'
import orderImg from '../assets/mainCat/order.png'
import breadImg from '../assets/mainCat/bread.png'
import paintryImg from '../assets/mainCat/paintry.png'

import hotCoffeeImg from '../assets/mainCat/hot-coffee.png'
import icedCoffeeImg from '../assets/mainCat/iced-coffee.png'
import icedDrinkImg from '../assets/mainCat/iced-drink.png'
import machaImg from '../assets/mainCat/macha.png'
import milkImg from '../assets/mainCat/milk.png'
import teaImg from '../assets/mainCat/tea.png'
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
        { id: 'bakery', title: 'بیکری', image: bakeryImg, icon: ChefHat },
        { id: 'pastry', title: 'پیستری', image: pastryImg, icon: Croissant },
        { id: 'custom', title: 'آیتم‌های سفارشی', image: orderImg, icon: Cake },
        { id: 'sourdough', title: 'نان خمیر ترش', image: breadImg, icon: Wheat },
        { id: 'pantry', title: 'پینتری', image: paintryImg, icon: Package },
      ],
      drinks: [
        {
          id: 'hot-espresso',
          title: 'نوشیدنی گرم بر پایه اسپرسو',
          image: hotCoffeeImg,
          icon: Coffee,
        },
        {
          id: 'cold-espresso',
          title: 'نوشیدنی سرد بر پایه اسپرسو',
          image: icedCoffeeImg,
          icon: CupSoda,
        },
        {
          id: 'cold-drinks',
          title: 'نوشیدنی سرد',
          image: icedDrinkImg,
          icon: GlassWater,
        },
        {
          id: 'matcha',
          title: 'ماچا',
          image: machaImg,
          icon: Leaf,
        },
        {
          id: 'flavored-hot-milk',
          title: 'شیر داغ طعم‌دار',
          image: milkImg,
          icon: Milk,
        },
        {
          id: 'tea-herbal',
          title: 'چای و دمنوش',
          image: teaImg,
          icon: Flower2,
        },
      ],
    } satisfies Record<CategoryTabId, Category[]>,
  },
}
