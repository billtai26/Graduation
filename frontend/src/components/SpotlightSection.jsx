import React from 'react'
import { GraduationCap, Info } from 'lucide-react'

export const SpotlightSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Cột trái: Ảnh chân dung tốt nghiệp cử nhân */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-slate-100 relative group aspect-4/3 sm:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
              alt="Graduation portrait"
              className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Tag overlay trên ảnh */}
            <div className="absolute bottom-3 left-3 bg-hutech-dark/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-bold text-white shadow-md">
              KHOA CÔNG NGHỆ THÔNG TIN (Chuyên ngành Kỹ Thuật Phần Mềm)
            </div>
          </div>

          {/* Badge nổi bật góc dưới */}
          <div className="absolute -bottom-4 right-4 bg-hutech-yellow text-slate-900 px-4 py-2 rounded-2xl shadow-lg border-2 border-white flex items-center gap-2 text-xs font-extrabold">
            <GraduationCap className="w-4 h-4" />
            <span>KẾT QUẢ TỐT NGHIỆP: Hạng Giỏi Toàn Khóa</span>
          </div>
        </div>

        {/* Cột phải: Thông điệp và Thống kê */}
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-hutech-blue bg-blue-50 px-3 py-1 rounded-full">
            Khoảnh khắc ĐẠI HỌC 2022 - 2026
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif leading-tight">
            Hôm nay là dấu ấn, ngày mai là chân trời mới
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Bốn năm tại mái trường HUTECH không đơn thuần chỉ là những bài thi,
            những gương mặt thân quen trên giảng đường, mà còn là hành trình tôi
            từng bước trưởng thành trong sự tự tin và niềm đam mê với sáng tạo
            công nghệ trong tương lai rộng mở.
          </p>

          {/* 3 Cột thống kê số liệu */}
          <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-100">
            <div className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-2xl font-black text-hutech-blue block">
                04
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Năm nỗ lực
              </span>
            </div>
            <div className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-2xl font-black text-hutech-blue block">
                145
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Tín chỉ tích lũy
              </span>
            </div>
            <div className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-2xl font-black text-hutech-blue block">
                3.62
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                GPA Cử nhân
              </span>
            </div>
          </div>

          {/* Callout lưu ý trang phục */}
          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              Sự hiện diện và lời chúc mừng trực tiếp từ Quý Thầy Cô, gia đình
              cùng bạn bè chính là món quà ý nghĩa nhất đối với tôi trong ngày
              trọng đại này!
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
