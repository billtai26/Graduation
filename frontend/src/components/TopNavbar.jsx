import React, { useState, useEffect } from 'react'
import { GraduationCap, Bell, Calendar, Send } from 'lucide-react'

export const TopNavbar = ({ onOpenRsvp }) => {
  // Đếm ngược tới ngày 20/10/2026
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 })

  useEffect(() => {
    const targetDate = new Date('2026-10-20T07:30:00')
    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate - now
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / 1000 / 60) % 60),
        })
      }
    }
    updateCountdown()
    const timer = setInterval(updateCountdown, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Nhãn hiệu HUTECH Graduation */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#002B66] to-[#004390] flex items-center justify-center text-white shadow-sm border border-blue-900/20">
            <GraduationCap className="w-5 h-5 text-[#FED100]" />
          </div>
          <div className="leading-tight">
            <span className="text-[11px] font-bold text-[#ED1C24] uppercase tracking-wider block">
              ĐẠI HỌC HUTECH
            </span>
            <span className="text-sm font-extrabold text-[#002B66] tracking-tight block">
              Graduation 2026
            </span>
          </div>
        </div>

        {/* Cụm Đếm ngược & Nút RSVP nhanh */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-[#004390]">
            <Calendar className="w-3.5 h-3.5 text-[#FED100]" />
            <span>Còn {timeLeft.days} ngày</span>
          </div>

          <button
            onClick={onOpenRsvp}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#004390] hover:bg-[#002B66] text-white text-xs font-bold rounded-xl shadow-sm transition-all active:scale-95"
          >
            <Send className="w-3.5 h-3.5 text-[#FED100]" />
            <span>RSVP</span>
          </button>
        </div>
      </div>
    </header>
  )
}
