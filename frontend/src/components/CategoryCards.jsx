import React from 'react'
import { Mail, Clock, CheckSquare, Compass, ArrowRight } from 'lucide-react'

export const CategoryCards = ({ onOpenRsvp }) => {
  const categories = [
    {
      badge: 'TRANG TRỌNG',
      badgeColor: 'bg-blue-100 text-blue-800',
      title: 'Thiệp Mời & Thư Tri Ân',
      desc: 'Lời tri ân chân thành gửi tới cha mẹ, thầy cô cùng toàn thể bạn bè thân hữu nhân ngày lễ tốt nghiệp.',
      actionText: 'Mở xem thiệp',
      icon: <Mail className="w-5 h-5 text-[#0A3D8F]" />,
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
    {
      badge: 'LỊCH TRÌNH',
      badgeColor: 'bg-amber-100 text-amber-800',
      title: 'Lịch Trình & Khung Giờ Ảnh',
      desc: 'Toàn bộ mốc thời gian của lễ vinh danh, thời gian chụp ảnh cùng người thân tại sảnh sảnh A HUTECH.',
      actionText: 'Xem mốc giờ',
      icon: <Clock className="w-5 h-5 text-amber-600" />,
      action: () => {
        const el = document.getElementById('location')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      },
    },
    {
      badge: 'XÁC NHẬN THAM GIA',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      title: 'Xác Nhận Tham Dự (RSVP)',
      desc: 'Gửi xác nhận tham dự để tôi chuẩn bị đón tiếp, chuẩn bị quà tặng lưu niệm và giữ chỗ ngồi phù hợp nhất.',
      actionText: 'Báo tin tham dự',
      icon: <CheckSquare className="w-5 h-5 text-emerald-700" />,
      action: onOpenRsvp,
    },
    {
      badge: 'HƯỚNG DẪN GỬI XE',
      badgeColor: 'bg-indigo-100 text-indigo-800',
      title: 'Chỉ Đường & Để Xe Cộ',
      desc: 'Vị trí bãi gửi xe máy, ô tô tại trường HUTECH Điện Biên Phủ và sơ đồ di chuyển lên hội trường A-08.20.',
      actionText: 'Chỉ đường & Lưu ý xe',
      icon: <Compass className="w-5 h-5 text-indigo-700" />,
      action: () => {
        const el = document.getElementById('location')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      },
    },
  ]

  return (
    <section id="guide" className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center space-y-2 mb-10">
        <span className="text-xs font-bold text-[#0A3D8F] tracking-widest uppercase block">
          THÔNG TIN CHI TIẾT
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
          Các Chuyên Mục Hướng Dẫn
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Mọi thông tin cần thiết về buổi lễ được sắp xếp chi tiết giúp quý
          khách dễ dàng theo dõi và đến tham gia thuận tiện nhất.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  {c.icon}
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badgeColor}`}
                >
                  {c.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">
                {c.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
            </div>

            <button
              onClick={c.action}
              className="mt-6 inline-flex items-center justify-between text-xs font-bold text-[#0A3D8F] hover:text-[#062359] group pt-3 border-t border-slate-100 cursor-pointer"
            >
              <span>{c.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
