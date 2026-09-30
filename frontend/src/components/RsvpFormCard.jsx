import React, { useState } from 'react'
import { Send, CheckCircle2, GraduationCap } from 'lucide-react'
import confetti from 'canvas-confetti'
import { sendRsvpConfirmation } from '../services/rsvpService'

export const RsvpFormCard = () => {
  const [formData, setFormData] = useState({
    guestName: '',
    relationship: 'Bạn bè (Cùng ngành)',
    attendingStatus: 'morning', // morning: Buổi Sáng, noon: Buổi Trưa
    wishes: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    try {
      await sendRsvpConfirmation({
        guestName: formData.guestName,
        relationship: formData.relationship,
        attendingStatus: 'yes',
        companionCount: 1,
        wishes: `[${formData.attendingStatus === 'morning' ? 'Khung giờ: Sáng 07:30 - 09:30' : 'Khung giờ: Trưa 10:30 - 12:00'}] ${formData.wishes}`,
      })
      setSuccess(true)
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
    } catch (err) {
      setErrorMsg(err.message || 'Có lỗi xảy ra, vui lòng thử lại!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="rsvp" className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Hình mờ Mũ Tốt Nghiệp (Graduation Cap Watermark) chuẩn thiết kế */}
        <div className="absolute right-4 top-4 text-slate-100 pointer-events-none select-none">
          <GraduationCap className="w-48 h-48 opacity-40 -rotate-12" />
        </div>

        {/* Tiêu đề Form */}
        <div className="text-center relative z-10 space-y-1 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-hutech-blue block">
            GỬI LỜI CHÚC CHO TÂN CỬ NHÂN ANH TÀI
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
            Kính mời Cô chú, Anh chị, Bạn bè gửi lời chúc và đến tham dự Lễ Tốt nghiệp của Con/Em/Mình
          </h2>
          <p className="text-xs text-slate-500">
            Khoảnh khắc này sẽ trọn vẹn hơn khi có sự hiện diện và động viên của
            bạn!
          </p>
          <p className="text-[11px] text-slate-400 italic">
            Vui lòng điền thông tin bên dưới:
          </p>
        </div>

        {success ? (
          <div className="py-12 text-center space-y-3 relative z-10">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">
              Đã Nhận Được Xác Nhận!
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Cảm ơn bạn đã phản hồi. Mình đã lưu thông tin và rất mong chờ được
              đón bạn tại Lễ Tốt nghiệp!
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-4 px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl"
            >
              Gửi phản hồi khác
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {errorMsg && (
              <div className="p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Họ &amp; Tên Của Bạn *
                </label>
                <input
                  type="text"
                  required
                  placeholder="VD: Anh Quân / Cô Minh Loan..."
                  value={formData.guestName}
                  onChange={(e) =>
                    setFormData({ ...formData, guestName: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hutech-blue/30  focus:border-hutech-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mối Quan Hệ Với An
                </label>
                <select
                  value={formData.relationship}
                  onChange={(e) =>
                    setFormData({ ...formData, relationship: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hutech-blue/30"
                >
                  <option value="Bạn bè (Cùng ngành)">
                    Bạn bè (Cùng ngành)
                  </option>
                  <option value="Bạn thân / Cấp 3">Bạn thân / Cấp 3</option>
                  <option value="Gia đình / Người thân">
                    Gia đình / Người thân
                  </option>
                  <option value="Thầy Cô HUTECH">Thầy Cô HUTECH</option>
                  <option value="Đồng nghiệp">Đồng nghiệp</option>
                </select>
              </div>
            </div>

            {/* Chọn Khung giờ dự kiến */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Khung Giờ Bạn Dự Kiến Đến Chụp Ảnh?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                    formData.attendingStatus === 'morning'
                      ? 'bg-blue-50/70 border-hutech-blue shadow-xs'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendingStatus"
                    checked={formData.attendingStatus === 'morning'}
                    onChange={() =>
                      setFormData({ ...formData, attendingStatus: 'morning' })
                    }
                    className="mt-0.5 text-hutech-blue focus:ring-hutech-blue"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      Buổi Sáng: 07:30 – 09:30
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Trước giờ nghi thức lễ vinh danh
                    </span>
                  </div>
                </label>

                <label
                  className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                    formData.attendingStatus === 'noon'
                      ? 'bg-blue-50/70 border-hutech-blue shadow-xs'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendingStatus"
                    checked={formData.attendingStatus === 'noon'}
                    onChange={() =>
                      setFormData({ ...formData, attendingStatus: 'noon' })
                    }
                    className="mt-0.5 text-hutech-blue focus:ring-hutech-blue"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      Buổi Trưa: 10:30 – 12:00
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Sau khi hoàn tất nghi thức trao bằng
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Lời chúc */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Lời Chúc, Lời Nhắn Gửi Đến Tân Cử Nhân
              </label>
              <textarea
                rows="3"
                placeholder="Nhắn gửi vài câu chúc mừng, sự nghiệp, tương lai hoặc kỷ niệm cùng nhau..."
                value={formData.wishes}
                onChange={(e) =>
                  setFormData({ ...formData, wishes: e.target.value })
                }
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hutech-blue/30"
              />
            </div>

            {/* Nút gửi */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-linear-to-r from-hutech-dark to-hutech-blue hover:opacity-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-hutech-yellow" />
              <span>
                {loading ? 'ĐANG GỬI DỮ LIỆU...' : 'GỬI XÁC NHẬN CHO AN NHÉ!'}
              </span>
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
