import React from 'react'

export const Footer = () => {
  return (
    <footer
      id="location"
      className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs py-10 px-4"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            HUTECH GRADUATION DAY 2026
          </span>
          <h3 className="text-base font-bold text-slate-800 mt-1 mb-2 font-serif">
            Lễ Bế Giảng &amp; Trao Bằng Tốt Nghiệp
          </h3>
          <p className="text-slate-500 leading-relaxed text-xs max-w-md">
            Sự hiện diện của Ba mẹ, Thầy Cô, người thân và bạn bè thân hữu là
            niềm vinh dự to lớn đối với Con trong ngày lễ trang
            trọng này.
          </p>
        </div>

        <div className="md:text-right text-slate-500 text-xs space-y-1">
          <p className="font-bold text-slate-700">
            Ban Tổ Chức Lễ Tốt Nghiệp HUTECH
          </p>
          <p>
            Thu Duc Campus: Khoa Công nghệ thông tin HUTECH, TP. Hồ Chí Minh
          </p>
          <p>Trụ sở chính: 475A Điện Biên Phủ, P. 25, Q. Bình Thạnh, TP.HCM</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
        <p>
          © 2026 Lễ Tốt Nghiệp Tân Khoa HUTECH (PHAN XUÂN ANH TÀI). All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <a href="#hero" className="hover:underline">
            Về đầu trang
          </a>
          <a href="#guide" className="hover:underline">
            Chỉ dẫn đường đi
          </a>
          <a href="#rsvp" className="hover:underline">
            Gửi lời chúc
          </a>
        </div>
      </div>
    </footer>
  )
}
