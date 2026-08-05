import slide1 from '../assets/slider/slide1.png'
import slide2 from '../assets/slider/slide2.png'
export interface HeroSlide {
  id: number
  title: string
  desc: string
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
}
