import React from 'react'
import { Clock, Camera, GraduationCap, Users } from 'lucide-react'

export const ScheduleSection = () => {
  const events = [
    {
      time: '07:00 - 07:45',
      title: 'Đón tiếp & Chụp ảnh lưu niệm',
      desc: 'Check-in tại sảnh A, nhận hoa & chụp hình kỷ niệm cùng tân khoa',
      icon: <Users className="w-4 h-4 text-white" />,
      tag: 'Đón khách',
    },
    {
      time: '08:00 - 09:30',
      title: 'Nghi thức Lễ Tốt Nghiệp',
      desc: 'Chào cờ, diễn văn của Hiệu trưởng & nghi thức trao bằng chính thức trên sân khấu',
      icon: <GraduationCap className="w-4 h-4 text-white" />,
      tag: 'Nghi thức',
    },
    {
      time: '09:30 - 11:00',
      title: 'Chụp hình kỷ yếu & Gặp gỡ',
      desc: 'Khu vực photobooth sảnh A và khuôn viên trường HUTECH',
      icon: <Camera className="w-4 h-4 text-white" />,
      tag: 'Giao lưu',
    },
  ]

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-blue-50 text-[#004390]">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">
            Lịch Trình Chi Tiết
          </h2>
          <p className="text-xs text-slate-500">
            Các mốc thời gian diễn ra trong buổi lễ
          </p>
        </div>
      </div>

      <div className="relative border-l-2 border-slate-100 ml-4 space-y-6">
        {events.map((ev, idx) => (
          <div key={idx} className="relative pl-6">
            <div className="absolute -left-4.25 top-1 w-8 h-8 rounded-full bg-[#004390] border-4 border-white shadow-md flex items-center justify-center">
              {ev.icon}
            </div>
            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold text-[#004390] tracking-wide">
                  {ev.time}
                </span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                  {ev.tag}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-800">{ev.title}</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {ev.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
