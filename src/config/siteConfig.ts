
import slide1 from '../assets/slider/slide1.png'
import slide2 from '../assets/slider/slide2.png'

import bakeryImg from '../assets/mainCat/bakery.svg'
import pastryImg from '../assets/mainCat/pastry.svg'
import orderImg from '../assets/mainCat/order.svg'
import breadImg from '../assets/mainCat/bread.svg'
import paintryImg from '../assets/mainCat/paintry.svg'
import cakeImg from '../assets/mainCat/cake.svg'

import hotCoffeeImg from '../assets/mainCat/hot-coffee.svg'
import icedCoffeeImg from '../assets/mainCat/iced-coffee.svg'
import icedDrinkImg from '../assets/mainCat/iced-drink.svg'
import machaImg from '../assets/mainCat/macha.svg'
import milkImg from '../assets/mainCat/milk.svg'
import teaImg from '../assets/mainCat/tea.svg'
import plusImg from '../assets/mainCat/plus.svg'

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

export interface MenuItem {
  id: string
  title: string
  description: string
  price: number
  images: string[]
  category?: string
  weight?: string
  ingredients?: string
  servingSize?: string
  discountPercent?: number
}

export interface Category {
  id: string
  title: string
  image: string
  note?: string
  items: MenuItem[]
}

export type NewItem = MenuItem

const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const toPersianDigits = (value: number) =>
  String(value).replace(/\d/g, (digit) => persianDigits[Number(digit)])

export function getDiscountedPrice(price: number, discountPercent?: number) {
  if (!discountPercent) return price
  return Math.round((price * (1 - discountPercent / 100)) / 1000) * 1000
}

function createPlaceholderItems(
  categoryId: string,
  categoryTitle: string,
  count = 4,
): MenuItem[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `${categoryId}-${index + 1}`,
    title: `${categoryTitle} ${toPersianDigits(index + 1)}`,
    description: 'توضیحات این محصول به‌زودی تکمیل می‌شود',
    price: 0,
    images: [],
    category: categoryTitle,
    weight: 'به‌زودی',
    ingredients: 'به‌زودی تکمیل می‌شود',
    servingSize: 'به‌زودی',
  }))
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
        { id: 'bakery', title: 'بیکری', image: bakeryImg, items: createPlaceholderItems('bakery', 'بیکری') },
        { id: 'pastry', title: 'پیستری', image: pastryImg, items: createPlaceholderItems('pastry', 'پیستری') },
        {
          id: 'cake',
          title: 'کیک',
          image: cakeImg,
          note: 'تمام شیرینی های فرانسوی از 48 ساعت قبل به صورت کیک در سایزهای مختلف قابل سفارش هستند',
          items: createPlaceholderItems('cake', 'کیک'),
        },
        { id: 'custom', title: 'آیتم‌های سفارشی', image: orderImg, items: createPlaceholderItems('custom', 'آیتم سفارشی') },
        { id: 'sourdough', title: 'نان خمیر ترش', image: breadImg, items: createPlaceholderItems('sourdough', 'نان خمیر ترش') },
        { id: 'pantry', title: 'پینتری', image: paintryImg, items: createPlaceholderItems('pantry', 'پینتری') },
      ] as Category[],
      drinks: [
        {
          id: 'hot-espresso',
          title: 'نوشیدنی گرم بر پایه اسپرسو',
          image: hotCoffeeImg,
          items: createPlaceholderItems('hot-espresso', 'نوشیدنی گرم اسپرسو'),
        },
        {
          id: 'cold-espresso',
          title: 'نوشیدنی سرد بر پایه اسپرسو',
          image: icedCoffeeImg,
          items: createPlaceholderItems('cold-espresso', 'نوشیدنی سرد اسپرسو'),
        },
        {
          id: 'cold-drinks',
          title: 'نوشیدنی سرد',
          image: icedDrinkImg,
          items: createPlaceholderItems('cold-drinks', 'نوشیدنی سرد'),
        },
        {
          id: 'matcha',
          title: 'ماچا',
          image: machaImg,
          items: createPlaceholderItems('matcha', 'ماچا'),
        },
        {
          id: 'flavored-hot-milk',
          title: 'شیر داغ طعم‌دار',
          image: milkImg,
          items: createPlaceholderItems('flavored-hot-milk', 'شیر داغ طعم‌دار'),
        },
        {
          id: 'tea-herbal',
          title: 'چای و دمنوش',
          image: teaImg,
          items: createPlaceholderItems('tea-herbal', 'چای و دمنوش'),
        },
          {
          id: 'extra',
          title: 'افزودنی ها',
          image: plusImg,
          items: createPlaceholderItems('extra', 'افزودنی'),
        },
      ] as Category[],
    } satisfies Record<CategoryTabId, Category[]>,
  },
  contact: {
    phone: '09960080286',
    whatsapp: '989960080286',
    email: 'flourishbakery2025@gmail.com',
    address: 'مازندران، نوشهر، بلوار کریمی، صد متر بعد از پاساژ لنگر',
    mapUrl: 'https://maps.app.goo.gl/Q8UY1Cci1fnvFiHs8',
    mapEmbedUrl: 'https://maps.google.com/maps?q=36.6549149,51.4902702&z=17&output=embed',
    hours: 'شنبه تا جمعه، ۹:۰۰ الی ۲۲:۳۰',
    instagram: '#',
  },
  newItems: {
    items: [
      {
        id: 'butter-croissant',
        title: 'کروسان کره‌ای',
        description: 'کروسان تازه و لایه‌لایه با کره فرانسوی',
        price: 85000,
        images: [item1],
        category: 'پیستری',
        discountPercent: 20,
        weight: '۹۰ گرم',
        ingredients: 'آرد گندم، کره فرانسوی، شکر، مخمر، نمک',
        servingSize: '۱ نفر',
      },
      {
        id: 'sourdough-bread',
        title: 'نان خمیر ترش',
        description: 'نان سنتی پخت‌شده با مایه ترش طبیعی',
        price: 65000,
        images: [item2 , item2_2],
        category: 'نان خمیر ترش',
        weight: '۵۰۰ گرم',
        ingredients: 'آرد سبوس‌دار، آب، مایه ترش طبیعی، نمک',
        servingSize: '۳ تا ۴ نفر',
      },
      {
        id: 'vanilla-latte',
        title: 'لاته وانیل',
        description: 'اسپرسو با شیر بخاردیده و شربت وانیل',
        price: 120000,
        images: [],
        category: 'نوشیدنی گرم بر پایه اسپرسو',
        weight: '۳۶۰ میلی‌لیتر',
        ingredients: 'اسپرسو، شیر، شربت وانیل',
        servingSize: '۱ نفر',
      },
      {
        id: 'matcha-latte',
        title: 'ماچا لاته',
        description: 'ماچا ژاپنی اصل با شیر بادام',
        price: 135000,
        images: [],
        category: 'ماچا',
        weight: '۳۶۰ میلی‌لیتر',
        ingredients: 'پودر ماچا درجه‌یک، شیر بادام، شربت وانیل',
        servingSize: '۱ نفر',
      },
      {
        id: 'chocolate-cake',
        title: 'کیک شکلاتی',
        description: 'کیک لایه‌ای با گاناش شکلات تلخ',
        price: 220000,
        images: [],
        category: 'کیک',
        discountPercent: 15,
        weight: '۱۲۰۰ گرم',
        ingredients: 'شکلات تلخ، آرد، تخم‌مرغ، کره، خامه',
        servingSize: '۶ تا ۸ نفر',
      },
      {
        id: 'peach-iced-tea',
        title: 'آیس تی هلو',
        description: 'دمنوش سرد و خنک با طعم هلو',
        price: 95000,
        images: [],
        category: 'نوشیدنی سرد',
        weight: '۴۵۰ میلی‌لیتر',
        ingredients: 'چای سیاه، شربت هلو، یخ، لیمو',
        servingSize: '۱ نفر',
      },
    ] satisfies NewItem[],
  },
}
