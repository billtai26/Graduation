import React from 'react'
import { Heart, MapPin, ArrowRight } from 'lucide-react'

export const LetterSection = () => {
  return (
    <section id="letter" className="py-14 px-4 max-w-5xl mx-auto">
      {/* Tiêu đề mục */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[11px] font-bold uppercase tracking-widest text-hutech-gold bg-yellow-50 px-3 py-1 rounded-full border border-hutech-yellow/30">
          TRI ÂN &amp; LỜI NHẮN
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-hutech-dark font-serif">
          Tâm Thư Của Tân Kỹ Sư
        </h2>
        <p className="text-xs text-slate-500 max-w-xl mx-auto">
          Lời cảm ơn sâu sắc nhất gửi tới Ba Mẹ, Quý Thầy Cô và những người bạn
          đã đồng hành trong suốt 4 năm tại HUTECH.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Cột trái: Ảnh banner kỷ niệm */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative group h-full min-h-90 bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop"
              alt="Kỷ niệm lễ tốt nghiệp HUTECH"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-hutech-dark via-hutech-dark/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-hutech-yellow block">
                KHOẢNH KHẮC MANG Ý NGHĨA CUỘC ĐỜI
              </span>
              <p className="text-sm font-serif italic text-blue-50 leading-relaxed">
                &ldquo;Ngày hôm nay là minh chứng thiêng liêng cho mọi nỗ lực
                không ngừng nghỉ và tình yêu thương vô bờ bến.&rdquo;
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-blue-200 pt-1">
                <MapPin className="w-3.5 h-3.5 text-hutech-yellow" />
                <span>Hội trường E3-05.01 • HUTECH Campus</span>
              </div>
            </div>
          </div>

          {/* 3 Thống kê nhỏ bên dưới ảnh */}
          <div className="grid grid-cols-3 gap-3 mt-4 text-center">
            <div className="p-3 bg-white rounded-2xl border border-slate-100 shadow-xs">
              <span className="text-lg font-black text-hutech-blue block">
                04
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Năm nỗ lực
              </span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-100 shadow-xs">
              <span className="text-lg font-black text-hutech-blue block">
                150
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Tín chỉ tích lũy
              </span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-100 shadow-xs">
              <span className="text-lg font-black text-hutech-gold block">
                Loại Giỏi
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Bằng kỹ sư
              </span>
            </div>
          </div>
        </div>

        {/* Cột phải: Toàn văn bức thư */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-hutech-blue">
                <Heart className="w-4 h-4 text-hutech-orange fill-hutech-orange" />
                <span>TÂM THƯ TỪ TÂN KỸ SƯ</span>
              </div>
              <span className="text-[11px] text-slate-400">
                TP. Hồ Chí Minh, Tháng 11/2026
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-hutech-dark font-serif">
              Kính gửi Ba Mẹ, Thầy Cô và Những Người Bạn Yêu Quý!
            </h3>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed font-sans">
              <p>
                Bốn năm đại học dưới mái trường{' '}
                <strong className="text-slate-800">HUTECH (2022 - 2026)</strong>{' '}
                trôi qua như một cái chớp mắt, nhưng đã đọng lại trong con ngập
                tràn kỷ niệm, lòng biết ơn và sự trưởng thành. Từng trang giáo
                trình, từng đêm thức trắng làm đồ án, mọi thành quả hôm nay con
                có được trước hết là nhờ công ơn dưỡng dục biển trời của{' '}
                <strong className="text-slate-800">Ba Mẹ</strong> – người đã
                luôn là điểm tựa bình yên nhất, hy sinh thầm lặng để chắp cánh
                cho ước mơ con được bay xa.
              </p>
              <p>
                Con cũng xin gửi lời tri ân sâu sắc nhất tới{' '}
                <strong className="text-slate-800">
                  Quý Thầy Cô Khoa Công Nghệ Thông Tin
                </strong>
                , những người đã truyền lửa đam mê, dạy dỗ con không chỉ kiến
                thức chuyên môn mà còn là đạo đức, bản lĩnh để tự tin bước vào
                đời.
              </p>
              <p>
                Và gửi đến các bạn cùng tập thể{' '}
                <strong className="text-slate-800">22DTHC4</strong> thân yêu:
                Cảm ơn các bạn đã cùng nhau học tập, trải nghiệm những năm tháng
                thanh xuân tuyệt đẹp nhất. Sự có mặt của mọi người trong buổi lễ
                trao bằng tốt nghiệp này sẽ là món quà vô giá và trọn vẹn nhất
                đối với mình.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold uppercase">
                Tân Kỹ Sư Công Nghệ Phần Mềm
              </span>
              <span className="text-sm font-black text-hutech-dark uppercase tracking-wider block">
                Phan Xuân Anh Tài
              </span>
            </div>

            <a
              href="#schedule"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-hutech-blue hover:text-hutech-dark"
            >
              <span>Xem Lịch Trình Buổi Lễ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
