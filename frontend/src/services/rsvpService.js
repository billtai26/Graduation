const API_URL = import.meta.env.VITE_API_URL

export const sendRsvpConfirmation = async (payload) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const result = await response.json()
  if (!response.ok) {
    throw new Error(result.error || 'Gửi xác nhận thất bại!')
  }
  return result
}
