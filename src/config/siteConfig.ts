
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
import plusImg from '../assets/mainCat/plus.png'
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
        { id: 'bakery', title: 'بیکری', image: bakeryImg},
        { id: 'pastry', title: 'پیستری', image: pastryImg },
        { id: 'custom', title: 'آیتم‌های سفارشی', image: orderImg},
        { id: 'sourdough', title: 'نان خمیر ترش', image: breadImg },
        { id: 'pantry', title: 'پینتری', image: paintryImg },
      ],
      drinks: [
        {
          id: 'hot-espresso',
          title: 'نوشیدنی گرم بر پایه اسپرسو',
          image: hotCoffeeImg,
        },
        {
          id: 'cold-espresso',
          title: 'نوشیدنی سرد بر پایه اسپرسو',
          image: icedCoffeeImg,
        },
        {
          id: 'cold-drinks',
          title: 'نوشیدنی سرد',
          image: icedDrinkImg,
        },
        {
          id: 'matcha',
          title: 'ماچا',
          image: machaImg,
        },
        {
          id: 'flavored-hot-milk',
          title: 'شیر داغ طعم‌دار',
          image: milkImg,
        },
        {
          id: 'tea-herbal',
          title: 'چای و دمنوش',
          image: teaImg,
        },
          {
          id: 'extra',
          title: 'افزودنی ها',
          image: plusImg,
        },
      ],
    } satisfies Record<CategoryTabId, Category[]>,
  },
}
