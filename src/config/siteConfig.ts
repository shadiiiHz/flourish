import slide1 from '../assets/slider/slide1.png'
import slide2 from '../assets/slider/slide2.png'

export interface HeroSlide {
  id: string
  title: string
  desc: string
  image: string
}

export const siteConfig = {
  hero: {
    slides: [
      {
        id: 'sourdough-bread',
        title: 'عطر نان تازه، شروعی گرم برای روز شما',
        desc: 'نان‌های خمیرترش، پخته‌شده با خمیرمایه طبیعی و آرد درجه‌یک.',
        image: slide1,
      },
      {
        id: 'buttery-croissant',
        title: 'کرواسان کره‌ای مخصوص',
        desc: 'با پستوی خانگی، ژامبون بوقلمون دودی و پنیر گودا.',
        image: slide2,
      },
    ] satisfies HeroSlide[],
  },
}
