import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'

export const InfoHighlights = () => {
  return (
    <section className="relative z-20 max-w-5xl mx-auto px-4 -mt-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Thẻ 1: Thời gian */}
        <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 flex items-start gap-4">
          <div className="p-3 bg-yellow-50 text-[#E5A800] rounded-xl shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              THỜI GIAN DIỄN RA
            </span>
            <p className="text-base font-extrabold text-slate-800 mt-0.5">
              Thứ Bảy, 18/10/2026
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Đợt 3 Lễ Tốt nghiệp niên khóa 2022 - 2026
            </p>
          </div>
        </div>

        {/* Thẻ 2: Khung giờ */}
        <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-[#0A3D8F] rounded-xl shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              KHUNG GIỜ CHÍNH XÁC
            </span>
            <p className="text-sm font-bold text-slate-800 mt-0.5">
              Sáng: 07:30 – 09:30 (Nghi thức)
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Trưa: 10:30 – 12:00 (Giao lưu &amp; chụp ảnh)
            </p>
          </div>
        </div>

        {/* Thẻ 3: Địa điểm */}
        <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 flex items-start gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-700 rounded-xl shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                ĐỊA ĐIỂM TỔ CHỨC
              </span>
              <span className="text-[9px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                HỘI TRƯỜNG
              </span>
            </div>
            <p className="text-sm font-bold text-slate-800 mt-0.5">
              Saigon Campus HUTECH
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Hội trường A-08.20 (Lầu 8), số 475A Điện Biên Phủ, Phường 25, Bình
              Thạnh, TP.HCM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
