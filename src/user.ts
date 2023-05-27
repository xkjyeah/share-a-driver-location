
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/

export function getUser() {
  const savedUserId = window.localStorage.getItem('userId')

  if (savedUserId?.match(uuidRegex)) {
    return savedUserId
  } else {
    const newUserId = window.crypto.randomUUID()
    window.localStorage.setItem('userId', newUserId)
    return newUserId
  }
}