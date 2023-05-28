import { pathParams } from "./pathParams"

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

export function getSendLocationSettings() {
  const sendLocationSettingsRaw = window.localStorage.sendLocation
  let sendLocationSettings: Record<string, boolean> = {}
  try {
    const parsed = JSON.parse(sendLocationSettingsRaw)
    if (parsed instanceof Array || !(parsed instanceof Object)) {
      throw new Error('bad type')
    }
    sendLocationSettings = parsed
  } catch (e) {
  }

  return sendLocationSettings[pathParams().sharingKey] || false
}

export function setSendLocationSettings(r: boolean) {
  const sendLocationSettingsRaw = window.localStorage.sendLocation
  let sendLocationSettings: Record<string, boolean> = {}
  try {
    const parsed = JSON.parse(sendLocationSettingsRaw)
    if (parsed instanceof Array || !(parsed instanceof Object)) {
      throw new Error('bad type')
    }
    sendLocationSettings = parsed
  } catch (e) {
  }

  sendLocationSettings[pathParams().sharingKey] = r
  window.localStorage.setItem('sendLocation', JSON.stringify(sendLocationSettings))
}