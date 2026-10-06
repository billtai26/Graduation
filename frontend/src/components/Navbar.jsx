import React from 'react'
import { GraduationCap } from 'lucide-react'

export const Navbar = ({ onScrollToRsvp }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Logo & Tên trường */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-linear-to-br from-hutech-dark to-hutech-blue flex items-center justify-center text-white shadow-sm ring-2 ring-blue-100">
            <GraduationCap className="w-6 h-6 text-hutech-yellow" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              TRƯỜNG ĐẠI HỌC CÔNG NGHỆ TP.HCM
            </span>
            <span className="text-sm font-extrabold text-hutech-dark tracking-tight block">
              LỄ TỐT NGHIỆP HUTECH 2026
            </span>
          </div>
        </div>

        {/* Menu Điều hướng */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <a href="#hero" className="hover:text-hutech-blue transition-colors">
            Thiệp Mời
          </a>
          <a
            href="#schedule"
            className="hover:text-hutech-blue transition-colors"
          >
            Lịch Trình
          </a>
          <a href="#guide" className="hover:text-hutech-blue transition-colors">
            Chỉ đường
          </a>
          <a
            href="#letter"
            className="hover:text-hutech-blue transition-colors"
          >
            Lời chúc cho Tân Cử Nhân
          </a>
        </nav>

        {/* Nút Call To Action */}
        <div>
          <button
            onClick={onScrollToRsvp}
            className="px-5 py-2.5 bg-hutech-yellow hover:bg-hutech-gold text-slate-900 text-xs font-bold rounded-xl shadow-sm transition-all transform active:scale-95 cursor-pointer"
          >
            Xác Nhận Tham Dự
          </button>
        </div>
      </div>
    </header>
  )
}
