// Demo login. Credentials are checked in the browser only - replace with a real backend call.
export const CREDENTIALS = {
  reg: '272390502403860',
  otr: 'UP25-0907697077',
  pwd: 'Pw2f6D',
}
const KEY = 'sfro-session'
export const setSession = (data) => sessionStorage.setItem(KEY, JSON.stringify(data))
export const getSession = () => {
  try { return JSON.parse(sessionStorage.getItem(KEY)) } catch { return null }
}
export const clearSession = () => sessionStorage.removeItem(KEY)
