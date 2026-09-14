import React from 'react'
import { MapPin, ExternalLink, Car, AlertCircle } from 'lucide-react'

export const LocationSection = () => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-yellow-50 text-yellow-700">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">
            Địa Điểm & Chỉ Đường
          </h2>
          <p className="text-xs text-slate-500">
            Trụ sở chính Trường Đại học Công nghệ TP.HCM (HUTECH)
          </p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-slate-200 relative aspect-video bg-slate-100">
        <iframe
          title="HUTECH 475A Dien Bien Phu"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.125126588267!2d106.71216337586884!3d10.80173335872478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a459cb43ab%3A0x6c3d29d370b52a7e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVFAuSENNIC0gSFVURUNI!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>

      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs text-slate-600">
        <div className="flex items-start gap-2">
          <Car className="w-4 h-4 text-[#004390] shrink-0 mt-0.5" />
          <span>
            <strong>Gửi xe:</strong> Gửi xe máy tại hầm giữ xe Tòa nhà A hoặc
            các bãi xe phụ đối diện cổng trường.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
          <span>
            <strong>Lưu ý:</strong> Ngày lễ tốt nghiệp lượng khách mời rất đông,
            quý khách nên đến trước 15-30 phút để thuận tiện gửi xe và di chuyển
            lên Hội trường A-08.20.
          </span>
        </div>
      </div>

      <a
        href="https://maps.google.com/?q=475A+Dien+Bien+Phu+Binh+Thanh+HUTECH"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
      >
        <span>Mở ứng dụng Google Maps</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  )
}
