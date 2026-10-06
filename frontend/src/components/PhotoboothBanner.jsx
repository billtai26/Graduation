import React from 'react'
import { Camera, CalendarCheck } from 'lucide-react'

export const PhotoboothBanner = ({ onOpenRsvp }) => {
  return (
    <section id="schedule" className="max-w-5xl mx-auto px-4 my-8">
      <div className="bg-linear-to-r from-hutech-dark via-hutech-blue to-hutech-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3.5 rounded-2xl bg-white/10 text-hutech-yellow backdrop-blur-md shrink-0 border border-white/10">
            <Camera className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              Hẹn Gặp Bạn Bè &amp; Người Thân Tại Sân E3!
            </h3>
            <p className="text-xs text-blue-100/80 max-w-xl leading-relaxed">
              Khung giờ chụp ảnh đẹp nhất: 06:30 - 07:15 (trước lễ) hoặc 10:30 -
              12:00 (sau khi nhận bằng). Hãy đến chụp cùng mình vài kiểu ảnh kỷ
              niệm nhé!
            </p>
          </div>
        </div>

        <button
          onClick={onOpenRsvp}
          className="px-6 py-3.5 bg-hutech-yellow hover:bg-hutech-gold text-slate-900 text-xs font-extrabold rounded-2xl shadow-lg transition-all shrink-0 cursor-pointer active:scale-95 flex items-center gap-2"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Xác Nhận Sẽ Đến Tham Dự</span>
        </button>
      </div>
    </section>
  )
}
