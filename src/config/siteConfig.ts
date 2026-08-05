
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

import item1 from '../assets/items/1.jpeg'
import item2 from '../assets/items/2.jpg'
import item2_2 from '../assets/items/2-2.jpg'
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

export interface NewItem {
  id: string
  title: string
  description: string
  price: number
  images: string[]
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
  newItems: {
    items: [
      {
        id: 'butter-croissant',
        title: 'کروسان کره‌ای',
        description: 'کروسان تازه و لایه‌لایه با کره فرانسوی',
        price: 85000,
        images: [item1],
      },
      {
        id: 'sourdough-bread',
        title: 'نان خمیر ترش',
        description: 'نان سنتی پخت‌شده با مایه ترش طبیعی',
        price: 65000,
        images: [item2 , item2_2],
      },
      {
        id: 'vanilla-latte',
        title: 'لاته وانیل',
        description: 'اسپرسو با شیر بخاردیده و شربت وانیل',
        price: 120000,
        images: [],
      },
      {
        id: 'matcha-latte',
        title: 'ماچا لاته',
        description: 'ماچا ژاپنی اصل با شیر بادام',
        price: 135000,
        images: [],
      },
      {
        id: 'chocolate-cake',
        title: 'کیک شکلاتی',
        description: 'کیک لایه‌ای با گاناش شکلات تلخ',
        price: 220000,
        images: [],
      },
      {
        id: 'peach-iced-tea',
        title: 'آیس تی هلو',
        description: 'دمنوش سرد و خنک با طعم هلو',
        price: 95000,
        images: [],
      },
    ] satisfies NewItem[],
  },
}
