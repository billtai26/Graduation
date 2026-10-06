import React from 'react'
import { CalendarCheck } from 'lucide-react'

export const InvitationCard = ({ onOpenRsvp }) => {
  return (
    <section id="hero" className="pt-12 pb-24 px-4 flex justify-center">
      {/* Mở rộng chiều ngang max-w-xl (576px) đến max-w-2xl (672px), tăng padding ngang px-8 sm:px-14 để nội dung không chạm viền sóng */}
      <div className="relative w-full max-w-xl sm:max-w-2xl bg-[#FFFBF2] rounded-[36px] px-8 sm:px-14 py-10 sm:py-12 shadow-2xl overflow-hidden border border-[#FDE6B8]">
        {/* 1. Đường viền lượn sóng trang trí (Wavy SVG Border) được đẩy sát mép ngoài */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none p-3.5 sm:p-5 text-[#F8B26A]/75"
          viewBox="0 0 600 850"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 35,35 
               C 70,18 105,52 140,35 C 175,18 210,52 245,35 C 280,18 315,52 350,35 C 385,18 420,52 455,35 C 490,18 525,52 565,35
               C 582,70 548,105 565,140 C 582,175 548,210 565,245 C 582,280 548,315 565,350 C 582,385 548,420 565,455 C 582,490 548,525 565,560 C 582,595 548,630 565,665 C 582,700 548,735 565,770 C 582,805 548,825 565,835
               C 530,852 495,818 460,835 C 425,852 390,818 355,835 C 320,852 285,818 250,835 C 215,852 180,818 145,835 C 110,852 75,818 35,835
               C 18,800 52,765 35,730 C 18,695 52,660 35,625 C 18,590 52,555 35,520 C 18,485 52,450 35,415 C 18,380 52,345 35,310 C 18,275 52,240 35,205 C 18,170 52,135 35,100 C 18,65 52,45 35,35 Z"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* 2. Dải Ruy Băng Cong "THIỆP MỜI" ở đỉnh */}
        <div className="relative z-10 flex justify-center -mt-2 mb-6">
          <div className="relative w-64 sm:w-72 h-18 sm:h-20 flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full filter drop-shadow-md"
              viewBox="0 0 260 70"
              fill="none"
            >
              {/* Đuôi ruy băng trái */}
              <path d="M 5,50 L 35,28 L 35,62 Z" fill="#D35400" />
              {/* Đuôi ruy băng phải */}
              <path d="M 255,50 L 225,28 L 225,62 Z" fill="#D35400" />
              {/* Thân ruy băng cong chính */}
              <path
                d="M 25,32 Q 130,8 235,32 L 230,58 Q 130,38 30,58 Z"
                fill="#F37920"
              />
              {/* Đường viền nét đứt vàng kim */}
              <path
                d="M 32,35 Q 130,14 228,35"
                stroke="#FED100"
                strokeWidth="1.8"
                strokeDasharray="4 3"
                fill="none"
              />
              <path
                d="M 36,54 Q 130,36 224,54"
                stroke="#FED100"
                strokeWidth="1.8"
                strokeDasharray="4 3"
                fill="none"
              />
            </svg>
            <span className="relative z-10 text-white font-black tracking-widest text-lg sm:text-xl uppercase drop-shadow-sm font-sans pt-0.5">
              THIỆP MỜI
            </span>
          </div>
        </div>

        {/* 3. Khung Ảnh Chân Dung Vòm Cong & Cụm Ngôi Sao */}
        <div className="relative z-10 flex justify-center my-4">
          <div className="relative">
            {/* Các ngôi sao lấp lánh xung quanh */}
            <span className="absolute -top-3 -left-6 text-[#F39C12] text-xl animate-pulse">
              ✦
            </span>
            <span className="absolute top-10 -left-7 text-[#F1C40F] text-xs">
              ★
            </span>
            <span className="absolute top-2 -right-6 text-[#F39C12] text-sm">
              ✦
            </span>
            <span className="absolute top-14 -right-8 text-[#F1C40F] text-lg animate-pulse">
              ★
            </span>
            <span className="absolute -bottom-2 -left-5 text-[#F39C12] text-base">
              ★
            </span>
            <span className="absolute bottom-5 -right-6 text-[#E67E22] text-sm">
              ✦
            </span>

            {/* Khung ảnh vòm cong */}
            <div className="w-52 sm:w-60 h-52 sm:h-60 rounded-t-full rounded-b-2xl overflow-hidden border-4 border-[#F68B1F] shadow-lg bg-amber-100">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                alt="Chân dung Anh Tài"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 4. Tên "ANH TÀI" uốn lượn màu cam/vàng đặc trưng */}
        <div className="relative z-10 text-center my-3">
          <h2 className="text-3xl sm:text-4xl font-black text-[#F27824] tracking-wider uppercase font-serif drop-shadow-xs scale-y-110">
            ANH TÀI
          </h2>
        </div>

        {/* 5. Đoạn trích dẫn lời nhắn nhủ - Canh đều và nằm gọn gàng bên trong */}
        <div className="relative z-10 text-center px-4 sm:px-8 space-y-1 my-4">
          <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
            Chính thức gia nhập thị trường lao động.
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            Hành trình này đã không đẹp đến vậy nếu không có sự hiện diện của
            mọi người.
          </p>
        </div>

        {/* 6. Khung 2 Cột: Thời Gian & Địa Điểm */}
        <div className="relative z-10 flex items-center justify-center my-6 max-w-md mx-auto px-2">
          {/* Cột Trái: Giờ & Ngày */}
          <div className="flex-1 text-center pr-4">
            <span className="text-xl sm:text-2xl font-black text-[#B83E1B] block font-serif tracking-tight">
              6:30
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#B83E1B] block">
              08/11/2026
            </span>
          </div>

          {/* Đường ngăn cách thẳng đứng màu cam */}
          <div className="w-[1.5px] h-14 bg-[#E06D28]" />

          {/* Cột Phải: Địa điểm tòa nhà E3 */}
          <div className="flex-1 text-left pl-4 text-[#B83E1B]">
            <p className="text-xs sm:text-sm font-bold leading-tight">
              Sân trường tòa nhà E3
            </p>
            <p className="text-[11px] sm:text-xs font-semibold leading-tight mt-0.5">
              Khu Công nghệ cao XLHN,
            </p>
            <p className="text-[11px] sm:text-xs font-semibold leading-tight">
              Tăng Nhơn Phú, Hồ Chí Minh
            </p>
          </div>
        </div>

        {/* 7. Lời nhắn mời nhảy múa chung vui */}
        <div className="relative z-10 text-center px-4 sm:px-6 mb-5">
          <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
            Ghé qua cùng nhảy múa chung vui với mình trong ngày trọng đại này
            nha.
          </p>
        </div>

        {/* 8. Hình vẽ minh họa hai người khiêu vũ / nhảy múa ở chân thiệp */}
        <div className="relative z-10 flex justify-center mt-2 mb-5">
          <div className="relative w-44 h-32 flex items-center justify-center">
            <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
              <circle
                cx="80"
                cy="65"
                r="32"
                fill="#FED100"
                fillOpacity="0.25"
              />
              <circle cx="82" cy="68" r="4" fill="#F39C12" fillOpacity="0.6" />
              <circle cx="106" cy="74" r="5" fill="#E67E22" fillOpacity="0.5" />

              {/* Nhân vật nam nhảy bên trái */}
              <circle cx="65" cy="36" r="6" fill="#F1C40F" />
              <path d="M 62,34 L 56,38 L 60,42 Z" fill="#F39C12" />
              <path
                d="M 64,43 L 56,54 L 66,66 L 74,52 Z"
                fill="#E74C3C"
                fillOpacity="0.8"
              />
              <path d="M 56,54 L 46,62 L 48,65 L 58,57 Z" fill="#F5B7B1" />
              <path
                d="M 66,66 L 56,88 L 60,90 L 72,74 L 84,86 L 87,83 Z"
                fill="#FADBD8"
              />

              {/* Nhân vật nữ váy xòe nhảy bên phải */}
              <ellipse cx="94" cy="38" r="5" fill="#F39C12" />
              <polygon points="94,30 84,33 94,36 104,33" fill="#D35400" />
              <rect x="91" y="34" width="6" height="3" fill="#BA4A00" />
              <path
                d="M 92,43 C 86,52 82,62 82,76 C 96,82 110,80 116,68 C 116,56 102,48 95,43 Z"
                fill="#F39C12"
              />
              <path d="M 94,44 L 84,52 L 85,55 L 95,47 Z" fill="#FAD7A0" />
              <path d="M 94,76 L 90,95 L 94,96 L 98,78 Z" fill="#F8C471" />
              <path d="M 104,74 L 108,92 L 112,91 L 108,74 Z" fill="#F8C471" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
