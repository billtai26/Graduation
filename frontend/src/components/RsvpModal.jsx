import React, { useState } from 'react'
import { X, Send, HeartHandshake, CheckCircle2 } from 'lucide-react'
import confetti from 'canvas-confetti'
import { sendRsvpConfirmation } from '../services/rsvpService'

export const RsvpModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    guestName: '',
    relationship: 'Bạn bè',
    attendingStatus: 'yes',
    companionCount: 0,
    wishes: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    try {
      await sendRsvpConfirmation(formData)
      setSuccess(true)
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      })
      setTimeout(() => {
        setSuccess(false)
        onClose()
      }, 2500)
    } catch (err) {
      setErrorMsg(
        err.message || 'Không thể gửi dữ liệu, vui lòng kiểm tra lại!',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">
              Xác Nhận Thành Công!
            </h3>
            <p className="text-xs text-slate-500">
              Cảm ơn bạn rất nhiều. Hẹn gặp bạn tại buổi lễ tốt nghiệp nhé!
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="p-3 bg-blue-50 text-[#004390] w-fit mx-auto rounded-2xl mb-2">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">
                Xác Nhận Tham Dự
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Sự hiện diện của bạn là niềm vinh hạnh rất lớn đối với mình
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tên của bạn <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nhập họ và tên hoặc biệt danh..."
                  value={formData.guestName}
                  onChange={(e) =>
                    setFormData({ ...formData, guestName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004390]/30 focus:border-[#004390]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mối quan hệ
                  </label>
                  <select
                    value={formData.relationship}
                    onChange={(e) =>
                      setFormData({ ...formData, relationship: e.target.value })
                    }
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004390]/30"
                  >
                    <option value="Gia đình">Gia đình</option>
                    <option value="Bạn bè">Bạn bè</option>
                    <option value="Đồng nghiệp">Đồng nghiệp</option>
                    <option value="Thầy cô">Thầy cô</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Người đi kèm
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    value={formData.companionCount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companionCount: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004390]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Bạn sẽ đến chứ?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Chắc chắn đến', val: 'yes' },
                    { label: 'Chưa rõ', val: 'tentative' },
                    { label: 'Bận mất rồi', val: 'no' },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.val}
                      onClick={() =>
                        setFormData({ ...formData, attendingStatus: opt.val })
                      }
                      className={`py-2 px-1 text-xs font-semibold rounded-xl border transition-all ${
                        formData.attendingStatus === opt.val
                          ? 'bg-[#004390] text-white border-[#004390] shadow'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Lời chúc gửi tân khoa
                </label>
                <textarea
                  rows="3"
                  placeholder="Viết vài dòng nhắn gửi tới mình..."
                  value={formData.wishes}
                  onChange={(e) =>
                    setFormData({ ...formData, wishes: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004390]/30"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-linear-to-r from-[#004390] to-[#002B66] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {loading ? 'Đang gửi...' : 'Gửi Xác Nhận'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
