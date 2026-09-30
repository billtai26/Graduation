import React from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { InfoHighlights } from './components/InfoHighlights'
import { SpotlightSection } from './components/SpotlightSection'
import { CategoryCards } from './components/CategoryCards'
import { RsvpFormCard } from './components/RsvpFormCard'
import { Footer } from './components/Footer'

export default function App() {
  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-hutech-light-bg flex flex-col">
      {/* 1. Header Bar trên cùng */}
      <Navbar onScrollToRsvp={scrollToRsvp} />

      {/* 2. Hero Section Xanh Navy & Đếm ngược */}
      <HeroSection onScrollToRsvp={scrollToRsvp} />

      {/* 3. 3 Thẻ thông tin sự kiện nổi bật */}
      <InfoHighlights />

      {/* 4. Hình ảnh Tân khoa, thông điệp và 3 số liệu */}
      <SpotlightSection />

      {/* 5. 4 Thẻ chuyên mục hướng dẫn */}
      <CategoryCards onOpenRsvp={scrollToRsvp} />

      {/* 6. Form RSVP xác nhận tham dự có icon mũ mờ */}
      <RsvpFormCard />

      {/* 7. Chân trang Footer */}
      <Footer />
    </div>
  )
}
