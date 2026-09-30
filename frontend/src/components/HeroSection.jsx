import React, { useState, useEffect } from 'react'
import { Calendar, Download, Sparkles } from 'lucide-react'

export const HeroSection = ({ onScrollToRsvp }) => {
  // Bộ đếm thời gian thực tới 18/07/2026
  const [timeLeft, setTimeLeft] = useState({
    days: 124,
    hours: 8,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const target = new Date('2026-07-18T07:30:00')
    const interval = setInterval(() => {
      const now = new Date()
      const diff = target - now
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative bg-linear-to-b from-hutech-dark via-hutech-blue to-hutech-darker text-white pt-16 pb-28 px-4 text-center overflow-hidden"
    >
      {/* Nền pattern chìm */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-5">
        {/* Huy hiệu nhỏ phía trên */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-hutech-yellow">
          <Sparkles className="w-3.5 h-3.5" />
          <span>
            TRƯỜNG ĐẠI HỌC CÔNG NGHỆ TP.HCM (HUTECH) • VIỆN KỸ THUẬT NĂM 2026
          </span>
        </div>

        {/* Tiêu đề chính */}
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-tight font-serif">
          Lễ Tốt Nghiệp &amp; Ngày Hội Vinh Quy
        </h1>

        {/* Danh xưng tân khoa */}
        <p className="text-base sm:text-lg font-medium text-blue-100">
          Vinh danh Tân Kỹ sư:{' '}
          <span className="font-extrabold text-hutech-yellow underline decoration-hutech-yellow/60 underline-offset-4">
            Nguyễn Gia An
          </span>{' '}
          • Khoa Công Nghệ Thông Tin
        </p>

        {/* Câu trích dẫn tri ân */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-blue-100/80 italic font-serif leading-relaxed px-4">
          &ldquo;Ghi nhớ chặng đường rèn luyện dưới mái giảng đường, con kính
          mời cha mẹ, quý thầy cô và bạn bè đến chung vui trong ngày lễ tốt
          nghiệp quan trọng này của con.&rdquo;
        </p>

        {/* Thẻ nhắc nhở gửi lời chúc */}
        <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 text-xs text-blue-50">
          Thư mời trang trọng - Kính mời Quý Thầy Cô, Gia đình &amp; Bạn bè đến
          chung vui &amp; chụp ảnh kỷ niệm
        </div>

        {/* Cụm 2 nút bấm thao tác */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <button
            onClick={onScrollToRsvp}
            className="px-6 py-3.5 bg-hutech-yellow hover:bg-hutech-gold text-slate-900 text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-transform active:scale-95 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>XÁC NHẬN THAM DỰ (RSVP)</span>
          </button>

          <a
            href="#guide"
            className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/20 backdrop-blur-md transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>TẢI THIỆP MỜI LƯU NIỆM</span>
          </a>
        </div>

        {/* Cụm đếm ngược Countdown Box */}
        <div className="pt-8">
          <div className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl max-w-lg w-full">
            <div className="flex items-center justify-between text-xs text-blue-100/90 mb-3 border-b border-white/15 pb-2 font-semibold">
              <span>ĐẾM NGƯỢC THỜI KHẮC TRAO BẰNG</span>
              <span className="text-hutech-yellow">18 Tháng 07, 2026</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-hutech-dark/70 rounded-xl p-2.5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] text-blue-200 uppercase tracking-widest">
                  NGÀY
                </span>
              </div>
              <div className="bg-hutech-dark/70 rounded-xl p-2.5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-blue-200 uppercase tracking-widest">
                  GIỜ
                </span>
              </div>
              <div className="bg-hutech-dark/70 rounded-xl p-2.5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-blue-200 uppercase tracking-widest">
                  PHÚT
                </span>
              </div>
              <div className="bg-hutech-dark/70 rounded-xl p-2.5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-hutech-yellow block">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-blue-200 uppercase tracking-widest">
                  GIÂY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
