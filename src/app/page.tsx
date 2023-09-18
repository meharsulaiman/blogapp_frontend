import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import HomeSlider from '@/components/HomeSlider/HomeSlider'
import CategoriesSlider from '@/components/Categories/CategoriesSlider'
import BlogsSlider from '@/components/BlogCards/BlogSlider'


export default function Home() {
  return (
    <main>
      <HomeSlider/>
      <CategoriesSlider/>
      <BlogsSlider/>
      <h1>Foooter---</h1>
    </main>
  )
}
