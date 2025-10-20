import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import Hero from '../components/Hero'
import SearchBand from '../components/SearchBand'
import Features from '../components/Features'
import IntroSection from '../components/IntroSection'
import Pricing from '../components/Pricing'
import Testimonial from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Biz Unite — Connect & Grow Your Business</title>
        <meta name="description" content="Connect, promote and grow your business" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* 🖼️ Carousel Section */}
          <HeroCarousel />

          {/* 🌟 Rest of the homepage sections */}
          <Hero />
          <SearchBand />
          <Features />
          <IntroSection />
          <Pricing />
          <Testimonial />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  )
}
