import React from 'react'
import { Calendar, MapPin, Award, Clock } from 'lucide-react'

export const InvitationCard = ({ onOpenRsvp }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/80 transition-all">
      {/* Khung Header phong cách Đại học HUTECH */}
      <div className="bg-linear-to-br from-[#002B66] via-[#004390] to-blue-800 text-white p-8 text-center relative">
        <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-[#FED100]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FED100] mb-4 border border-white/15">
          <Award className="w-4 h-4" /> Lễ Bế Giảng & Trao Bằng Tốt Nghiệp 2026
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-2">
          THIỆP MỜI TỐT NGHIỆP
        </h1>
        <p className="italic text-blue-100 text-sm sm:text-base font-normal tracking-normal">
          Trân trọng kính mời Gia đình, Thầy Cô & Bạn bè đến chung vui cùng
        </p>

        <div className="my-6 inline-block bg-white text-slate-900 px-6 py-3 rounded-2xl shadow-md border-b-4 border-[#FED100]">
          <span className="text-xs text-slate-500 uppercase tracking-widest block font-medium">
            Tân Khoa
          </span>
          <span className="text-xl sm:text-2xl font-black text-[#004390] uppercase tracking-wide">
            Phan Xuân Anh Tài
          </span>
          <span className="text-xs text-slate-600 block mt-0.5 font-medium">
            Khoa Công Nghệ Thông Tin • HUTECH
          </span>
        </div>
      </div>

      {/* Thông tin Chi tiết thời gian & Địa điểm */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-100/80">
            <div className="p-3 bg-[#004390] text-white rounded-xl shadow-sm">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Thời Gian
              </span>
              <p className="text-sm font-bold text-slate-800">
                Thứ Bảy, Ngày 18/07/2026
              </p>
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#004390]" /> Khai mạc: 07:30
                Sáng
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-yellow-50/60 border border-yellow-100/80">
            <div className="p-3 bg-[#FED100] text-slate-900 rounded-xl shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Địa Điểm
              </span>
              <p className="text-sm font-bold text-slate-800">
                Hội trường A-08.20
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Trụ sở 475A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM
              </p>
            </div>
          </div>
        </div>

        {/* Nút hành động */}
        <div className="pt-2 text-center">
          <button
            onClick={onOpenRsvp}
            className="w-full py-4 px-8 bg-linear-to-r from-[#004390] to-[#002B66] text-white text-base font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 flex items-center justify-center gap-2"
          >
            <span>Xác Nhận Tham Dự (RSVP)</span>
          </button>
          <p className="text-xs text-slate-400 mt-2">
            Vui lòng phản hồi sớm để mình sắp xếp đón tiếp chu đáo nhất nhé!
          </p>
        </div>
      </div>
    </div>
  )
}
