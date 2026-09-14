import { useState } from 'react'
import { TopNavbar } from './components/TopNavbar'
import { InvitationCard } from './components/InvitationCard'
import { ScheduleSection } from './components/ScheduleSection'
import { LocationSection } from './components/LocationSection'
import { RsvpModal } from './components/RsvpModal'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans pb-20">
      {/* 1. Thanh Top Navigation Bar cố định phía trên */}
      <TopNavbar onOpenRsvp={() => setIsModalOpen(true)} />

      {/* Pattern nền trang trí */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[20px_20px]" />

      <main className="relative max-w-xl mx-auto px-4 pt-6 sm:pt-10 space-y-6">
        {/* Khung Thiệp mời chính */}
        <InvitationCard onOpenRsvp={() => setIsModalOpen(true)} />

        {/* Lịch trình chi tiết các mốc giờ */}
        <ScheduleSection />

        {/* Bản đồ và hướng dẫn gửi xe tại trường */}
        <LocationSection />

        {/* Footer */}
        <footer className="text-center pt-4 text-xs text-slate-400 space-y-1">
          <p>© 2026 Lễ Tốt Nghiệp HUTECH • Thiết kế bởi Tân Khoa</p>
          <p className="italic">
            Rất hân hạnh được đón tiếp Quý Thầy Cô, Gia Đình & Các Bạn!
          </p>
        </footer>
      </main>

      {/* Modal Popup RSVP */}
      <RsvpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
