import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { InvitationCard } from './components/InvitationCard'
import { LetterSection } from './components/LetterSection'
import { PhotoboothBanner } from './components/PhotoboothBanner'
import { InfoHighlights } from './components/InfoHighlights'
import { CategoryCards } from './components/CategoryCards'
import { RsvpFormCard } from './components/RsvpFormCard'
import { RsvpModal } from './components/RsvpModal'
import { Footer } from './components/Footer'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Hàm cuộn mượt xuống Form đăng ký trên trang
  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Hàm mở Modal Popup xác nhận nhanh
  const handleOpenRsvpModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-hutech-light-bg flex flex-col font-sans text-slate-800">
      {/* 1. Header Bar trên cùng */}
      <Navbar onScrollToRsvp={scrollToRsvp} />

      <main className="flex-1">
        {/* 2. Thiệp Mời Minh Họa: Chiều rộng đã mở rộng, chữ nằm gọn trong khung lượn sóng */}
        <InvitationCard onOpenRsvp={handleOpenRsvpModal} />

        {/* 3. Tâm Thư Của Tân Kỹ Sư */}
        <LetterSection />

        {/* 4. Banner Hẹn Gặp Check-in Photobooth Sảnh E3 */}
        <PhotoboothBanner onOpenRsvp={handleOpenRsvpModal} />

        {/* 5. 4 Thẻ chuyên mục hướng dẫn chi tiết */}
        <CategoryCards onOpenRsvp={scrollToRsvp} />

        {/* 6. Form RSVP xác nhận trực tiếp */}
        <RsvpFormCard />
      </main>

      {/* 7. Chân trang Footer */}
      <Footer />

      {/* 8. Modal Popup RSVP */}
      <RsvpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
